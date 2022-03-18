import PaletteHexagon from 'components/HexPalette/PaletteHexagon';
import { IHexPalette } from 'components/HexPalette';

const DetailPalette: React.FC<IHexPalette> = ({ palette }) => {
  const { hexCodes } = palette;
  const hexCodeList: string[] = hexCodes.split('#').map((code) => '#' + code);

  return (
    <>
      <PaletteHexagon hexCodes={hexCodeList} isLarge />
    </>
  );
};

export default DetailPalette;
