import React from 'react';
import styles from './HexCell.module.scss';

interface HexCellProps {
  hexCode: string;
}

const HexCell: React.FC<HexCellProps> = ({ hexCode }) => {
  return (
    <div className={styles.HexCell} style={{ backgroundColor: hexCode }}>
      HexCell
    </div>
  );
};

export default HexCell;
