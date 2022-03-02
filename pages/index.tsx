import type { NextPage } from 'next';

import PaletteList from 'components/PaletteList';
import { mockHexPalette } from 'mock';

const mockList = [mockHexPalette, mockHexPalette, mockHexPalette];

const Home: NextPage = () => {
  return (
    <>
      <PaletteList contents={mockList} />
    </>
  );
};

export default Home;
