import HexCell from './HexCell';
import styles from './Hex.module.scss';

const HexContainer = () => {
  return (
    <div className={styles.HexContainer}>
      <HexCell hexCode="#3fbe764" />
      <HexCell hexCode="#3fbe764" />
      <HexCell hexCode="#3fbe764" />
      <HexCell hexCode="#3fbe764" />
    </div>
  );
};

export default HexContainer;
