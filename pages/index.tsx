import HexContainer from 'components/HexPalette/HexContainer';
import type { NextPage } from 'next';

import { hexcodesMock } from 'mock';

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <HexContainer hexCodes={hexcodesMock} />
      <HexContainer hexCodes={hexcodesMock} />
    </>
  );
};

export default Home;
