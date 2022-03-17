import HexContainer from './HexContainer';
import { getTimeDiff } from 'utils/common';

import { Palette } from 'store/modules/paletteList';
import styles from './Hex.module.scss';
import Link from 'next/link';

export interface IHexPalette {
  palette: Palette;
}

const HexPalette: React.FC<IHexPalette> = ({ palette }) => {
  const { id, hexCodes, like, createdAt, title } = palette;
  const hexCodeList: string[] = hexCodes.split('#').map((code) => '#' + code);

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
