import HexPalette, { HexPaletteType } from 'components/HexPalette';
import styles from './List.module.scss';

interface ListProps {
  hexPaletteList: HexPaletteType[];
}
const List: React.FC<ListProps> = ({ hexPaletteList }) => {
  return (
    <div className={styles.List}>
      {hexPaletteList.map((item, index) => {
        return <HexPalette key={index} palette={{ ...item }} />;
      })}
    </div>
  );
};

export default List;
