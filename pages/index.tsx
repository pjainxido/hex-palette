import type { NextPage } from 'next';

import PaletteList, { IPaletteList } from 'components/PaletteList';
import { mockPaletteList } from 'mock';
import axios from 'axios';

const Home: NextPage<IPaletteList> = ({ contents }) => {
  return (
    <div>
      <PaletteList contents={contents || mockPaletteList} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get('http://localhost:3004/palettes');

  return {
    props: {
      contents: response.data,
    },
  };
}

export default Home;
