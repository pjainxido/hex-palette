import HexRow from './HexRow';
import styles from './Hex.module.scss';

export interface HexCodes {
  hexCodes: string[];
}

const HexContainer: React.FC<HexCodes> = ({ hexCodes }) => {
  return (
    <div className={styles.HexContainer}>
      <HexRow hexCodes={hexCodes.filter((_, index) => index < 2)} />
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index >= 2 && index < 5)}
      />
      <HexRow hexCodes={hexCodes.filter((_, index) => index >= 5)} />
    </div>
  );
};

export default HexContainer;
