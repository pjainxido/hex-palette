import HexContainer from 'components/Hex/HexContainer';
import type { NextPage } from 'next';

import { hexcodesMock } from 'mock';

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <HexContainer hexCodes={hexcodesMock} />
    </>
  );
};

export default Home;
