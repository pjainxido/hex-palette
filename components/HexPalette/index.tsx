import HexContainer from './HexContainer';
import { getTimeDiff } from 'utils/common';

import styles from './Hex.module.scss';
import Link from 'next/link';

export type HexPaletteType = {
  id: string;
  unparsedCode: string;
  like: number;
  createdAt: Date;
  title: string;
};

interface HexPaletteProps {
  palette: HexPaletteType;
}

const HexPalette: React.FC<HexPaletteProps> = ({ palette }) => {
  const { id, unparsedCode, like, createdAt, title } = palette;
  const hexCodeList: string[] = unparsedCode.split('#');

  return (
    <div className={styles.HexPalette}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Link href={`/palette/${id}`}>
            <a>{title}</a>
          </Link>
        </div>
      </div>
      <HexContainer hexCodes={hexCodeList} />
      <div className={styles.footer}>
        <div className={styles.like}>{like}</div>
        <div className={styles.date}>{getTimeDiff(createdAt)}</div>
      </div>
    </div>
  );
};

export default HexPalette;
