import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import PaletteList from 'components/PaletteList';
import { IPaletteList } from 'components/PaletteList';

import axios from 'axios';

const Home: NextPage<IPaletteList> = ({ list }) => {
  return (
    <div>
      <PaletteList list={list} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await axios.get('http://localhost:3004/palettes');
  const response = await axios.get(
    'http://localhost:8080/palettes?sort=old&page=0'
  );

  return {
    props: {
      list: response.data,
    },
  };
};

export default Home;
