import PaletteHexagon from './PaletteHexagon';

import { Palette } from 'store/modules/paletteList';
import styles from './HexPalette.module.scss';
import Link from 'next/link';
import LikeButton from 'components/Button/LikeButton';
import DateLabel from 'components/DateLabel';

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
      <PaletteHexagon hexCodes={hexCodeList} />
      <div className={styles.footer}>
        <div className={styles.like}>
          <LikeButton like={like} paletteId={id} />
        </div>
        <DateLabel date={createdAt} />
      </div>
    </div>
  );
};

export default HexPalette;
