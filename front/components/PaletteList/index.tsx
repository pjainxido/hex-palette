import { Palette } from 'store/modules/paletteList';
import HexPalette from 'components/HexPalette';

import styles from './PaletteList.module.scss';

export interface IPaletteList {
  contents: Palette[];
}

const PaletteList: React.FC<IPaletteList> = ({ contents }) => {
  return (
    <div className={styles.PaletteList}>
      {contents.map((item, index) => {
        return <HexPalette key={index} palette={{ ...item }} />;
      })}
    </div>
  );
};

export default PaletteList;
