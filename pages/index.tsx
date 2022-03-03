import type { NextPage } from 'next';

import PaletteList from 'components/PaletteList';
import { mockPaletteList } from 'mock';

const Home: NextPage = () => {
  return (
    <>
      <PaletteList contents={mockPaletteList} />
    </>
  );
};

export default Home;
