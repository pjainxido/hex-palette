import styles from './Cell.module.scss';

interface ILabelCell {
  label: string;
}

const LabelCell: React.FC<ILabelCell> = ({ label }) => {
  const copiedText = 'copied!';
  const hexCode = label === copiedText ? 'transparent' : label;

  return (
    <div
      className={styles.HexCell}
      style={{
        background: hexCode,
      }}
    >
      <div className={styles.top} style={{ borderBottomColor: hexCode }} />
      <span
        className={styles.HexCodeText}
        style={{
          backgroundColor: `rgba(0,0,0,${label === copiedText ? 1 : 0.1})`,
          opacity: label !== '' ? 1 : 0,
        }}
      >
        {label}
      </span>
      <div className={styles.bottom} style={{ borderTopColor: hexCode }} />
    </div>
  );
};

export default LabelCell;
