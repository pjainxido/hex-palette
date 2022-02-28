import type { NextPage } from 'next';

import { mockHexPalette } from 'mock';
import HexPalette from 'components/HexPalette';

const Home: NextPage = () => {
  return (
    <>
      <HexPalette palette={mockHexPalette} />
      <HexPalette palette={mockHexPalette} />
      <HexPalette palette={mockHexPalette} />
      <HexPalette palette={mockHexPalette} />
    </>
  );
};

export default Home;
