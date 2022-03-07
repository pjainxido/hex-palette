import type { NextPage } from 'next';

import PaletteList from 'components/PaletteList';
import { mockPaletteList } from 'mock';

const Home: NextPage = () => {
  return (
    <div>
      <PaletteList contents={mockPaletteList} />
    </div>
  );
};

export default Home;
