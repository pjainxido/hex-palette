import HexPalette, { HexPaletteType } from 'components/HexPalette';

interface ListProps {
  hexPaletteList: HexPaletteType[];
}
const List: React.FC<ListProps> = ({ hexPaletteList }) => {
  return (
    <div>
      {hexPaletteList.map((item, index) => {
        return <HexPalette key={index} palette={{ ...item }} />;
      })}
    </div>
  );
};

export default List;
