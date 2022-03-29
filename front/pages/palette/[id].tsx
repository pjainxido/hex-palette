import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import axios from 'axios';
import HexPalette from 'components/HexPalette';
import { IHexPalette } from 'components/HexPalette';

import styles from './PalettePage.module.scss';
import { mockHexPalette } from 'mock';
import DetailPalette from './DetailPalette';
import { Palette } from 'store/modules/paletteList';

const PalettePage: NextPage<IHexPalette | null> = ({ palette }) => {
  // const mockData = mockHexPalette;
  // const { id, hexCodes, tags, like } = palette;
  // const detailPaletteProps: Palette = {
  //   id: id,
  //   hexCodes: hexCodes,
  //   tags: tags,
  //   like:
  // };
  return palette ? (
    <div className={styles.PalettePage}>
      {/* <DetailPalette palette={mockData} /> */}
      <DetailPalette palette={palette} />
      {/* {JSON.stringify(palette)} */}
    </div>
  ) : (
    <div>Wrong Access</div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  try {
    const response = await axios.get(`http://localhost:8080/palettes/id/${id}`);
    return {
      props: {
        palette: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        palette: null,
      },
    };
  }
};

export default PalettePage;
