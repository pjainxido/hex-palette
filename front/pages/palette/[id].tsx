import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import axios from 'axios';
import HexPalette from 'components/HexPalette';
import { IHexPalette } from 'components/HexPalette';

import styles from './PalettePage.module.scss';
import { mockHexPalette } from 'mock';
import DetailPalette from './DetailPalette';

const PalettePage: NextPage<IHexPalette> = ({ palette }) => {
  const mockData = mockHexPalette;
  return (
    <div className={styles.PalettePage}>
      <DetailPalette palette={mockData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const { id } = query;
  // const response = await axios.get(`https://localhost:8080/palette/${id}`);

  return {
    props: {
      // palette: response.data,
      palette: null,
    },
  };
};

export default PalettePage;
