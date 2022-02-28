import { useEffect } from 'react';
import HexContainer from './HexContainer';
import { timeForToday } from 'utils/common';

import styles from './Hex.module.scss';

export type HexPaletteType = {
  id: string;
  unparsedCode: string;
  like: number;
  createdAt: Date;
  author: string;
};

interface HexPaletteProps {
  palette: HexPaletteType;
}

const HexPalette: React.FC<HexPaletteProps> = ({ palette }) => {
  const { id, unparsedCode, like, createdAt, author } = palette;
  const hexCodeList: string[] = unparsedCode.split('#');
  useEffect(() => {
    console.log(hexCodeList);
  }, []);

  return (
    <div className={styles.HexPalette}>
      <HexContainer hexCodes={hexCodeList} />
      <div>{id}</div>
      <div className={styles.footer}>
        <div className={styles.like}>{like}</div>
        <div className={styles.createdAt}>{timeForToday(createdAt)}</div>
        <div className={styles.author}>{author}</div>
      </div>
    </div>
  );
};

export default HexPalette;
