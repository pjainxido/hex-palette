import { CSSProperties } from 'react';
import styles from './Cell.module.scss';

interface ILabelCell {
  label: string;
  isLarge?: boolean;
}

const LabelCell: React.FC<ILabelCell> = ({ label, isLarge = false }) => {
  const copiedText = 'copied!';
  const hexCode = label === copiedText ? 'transparent' : label;

  const cellStyle: CSSProperties = {
    backgroundColor: hexCode,
  };
  const labelStyle: CSSProperties = {
    backgroundColor: `rgba(0,0,0,${label === copiedText ? 1 : 0.1})`,
    opacity: label !== '' ? 1 : 0,
  };

  const cellBorderStyle: CSSProperties = {
    borderBottomColor: hexCode,
    borderTopColor: hexCode,
  };

  return (
    <div className={isLarge ? styles.LargeCell : styles.Cell} style={cellStyle}>
      <div className={styles.top} style={cellBorderStyle} />
      <span className={styles.HexCodeText} style={labelStyle}>
        {label}
      </span>
      <div className={styles.bottom} style={cellBorderStyle} />
    </div>
  );
};

export default LabelCell;
