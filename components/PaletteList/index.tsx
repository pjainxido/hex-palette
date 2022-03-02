import HexPalette, { HexPaletteType } from 'components/HexPalette';
import styles from './PaletteList.module.scss';

interface ListProps {
  contents: HexPaletteType[];
}
const PaletteList: React.FC<ListProps> = ({ contents }) => {
  return (
    <div className={styles.PaletteList}>
      {contents.map((item, index) => {
        return <HexPalette key={index} palette={{ ...item }} />;
      })}
    </div>
  );
};

export default PaletteList;
