import { CSSProperties } from 'react';
import styles from './Cell.module.scss';

interface ILabelCell {
  label: string;
}

const LabelCell: React.FC<ILabelCell> = ({ label }) => {
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
    <div className={styles.HexCell} style={cellStyle}>
      <div className={styles.top} style={cellBorderStyle} />
      <span className={styles.HexCodeText} style={labelStyle}>
        {label}
      </span>
      <div className={styles.bottom} style={cellBorderStyle} />
    </div>
  );
};

export default LabelCell;
