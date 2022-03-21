import DetailHeader from './DetailHeader';
import DetailFooter from './DetailFooter';
import PaletteHexagon from 'components/HexPalette/PaletteHexagon';
import { IHexPalette } from 'components/HexPalette';

const DetailPalette: React.FC<IHexPalette> = ({ palette }) => {
  const { hexCodes, title, createdAt, like, id, tags } = palette;
  const hexCodeList: string[] = hexCodes.split('#').map((code) => '#' + code);

  return (
    <>
      <DetailHeader title={title} createdAt={createdAt} />
      <PaletteHexagon hexCodes={hexCodeList} isLarge />
      <DetailFooter like={like} paletteId={id} tags={tags} />
    </>
  );
};

export default DetailPalette;
