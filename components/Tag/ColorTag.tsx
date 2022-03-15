import React from 'react';
import styles from './Tag.module.scss';

interface IColorTag {
  label: string;
  hexCode: string;
  onClick?: () => void;
  onClose?: (label: string) => void;
}

const ColorTag: React.FC<IColorTag> = ({
  label,
  hexCode,
  onClose,
  onClick,
}) => {
  return (
    <div className={styles.Tag} onClick={onClick}>
      <div className={styles.colorDot} style={{ background: hexCode }} />
      {label}
      {onClose && <label className={styles.closeLabel}></label>}
    </div>
  );
};

export default ColorTag;
