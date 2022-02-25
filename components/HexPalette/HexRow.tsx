import HexCell from './HexCell';
import styles from './Hex.module.scss';

import { HexCodes } from './HexContainer';

const HexRow: React.FC<HexCodes> = ({ hexCodes }) => {
  return (
    <div className={styles.HexContainer}>
      {hexCodes.map((code, index) => {
        return <HexCell hexCode={code} key={index} />;
      })}
    </div>
  );
};

export default HexRow;
