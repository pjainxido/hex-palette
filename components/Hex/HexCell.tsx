import React from 'react';
import styles from './Hex.module.scss';

interface HexCellProps {
  hexCode: string;
}

const HexCell: React.FC<HexCellProps> = ({ hexCode }) => {
  return (
    <div className={styles.HexCell} style={{ backgroundColor: hexCode }}></div>
  );
};

export default HexCell;
