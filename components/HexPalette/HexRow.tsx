import HexCell from './HexCell';
import styles from './Hex.module.scss';

interface IHexRow {
  hexCodes?: string[];
}

const HexRow: React.FC<IHexRow> = ({ hexCodes }) => {
  return hexCodes ? (
    <div className={styles.HexRow}>
      {hexCodes.map((code, index) => {
        return <HexCell hexCode={code} key={index} />;
      })}
    </div>
  ) : null;
};

export default HexRow;
