import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import PaletteList from 'components/PaletteList';
import { IPaletteList } from 'components/PaletteList';

import axios, { AxiosResponse } from 'axios';

interface Props extends IPaletteList {
  error?: boolean;
}

const Home: NextPage<Props> = ({ list, error }) => {
  return (
    <div>
      <PaletteList list={list}>
        {error && <div>{`Error On Server`}</div>}
      </PaletteList>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let response: AxiosResponse;
  try {
    response = await axios.get(
      'http://localhost:8080/palettes?sort=old&page=0'
    );
    console.log(response);
    return {
      props: {
        list: response.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        list: [],
        error: true,
      },
    };
  }
};

export default Home;
