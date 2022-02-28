import HexContainer from 'components/HexPalette/HexContainer';
import type { NextPage } from 'next';

import { hexcodesMock } from 'mock';
import { mockHexPalette } from 'mock';
import HexPalette from 'components/HexPalette';

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <HexContainer hexCodes={hexcodesMock} />
      <HexContainer hexCodes={hexcodesMock} />
      <HexPalette palette={mockHexPalette} />
    </>
  );
};

export default Home;
