import DetailHeader from './DetailHeader';
import DetailFooter from './DetailFooter';
import PaletteHexagon from 'components/HexPalette/PaletteHexagon';
import { IHexPalette } from 'components/HexPalette';

import styles from './DetailPalette.module.scss';

const DetailPalette: React.FC<IHexPalette> = ({ palette }) => {
  const { hexCodes, title, createdAt, like, id, tags } = palette;
  const hexCodeList: string[] = hexCodes.split('#').map((code) => '#' + code);

  return (
    <div className={styles.DetailPalette}>
      <DetailHeader title={title} createdAt={createdAt} />
      <div className={styles.paletteWrapper}>
        <PaletteHexagon hexCodes={hexCodeList} isLarge />
      </div>
      <DetailFooter like={like} paletteId={id} tags={tags} />
    </div>
  );
};

export default DetailPalette;
