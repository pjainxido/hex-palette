import React from 'react';
import styles from './Tag.module.scss';

export interface IColorTag {
  label: string;
  hexCode: string;
  onClick?: () => void;
  onClose?: (label: string) => void;
  background?: string;
}
// interface IColorTag {
//   label: string;
//   hexCode: string;
// }

export const colorTagList: IColorTag[] = [
  {
    label: 'Blue',
    hexCode: '#4073FF',
  },
  {
    label: 'Green',
    hexCode: '#7ECC49',
  },
  {
    label: 'Red',
    hexCode: '#DB4035',
  },
  {
    label: 'Pink',
    hexCode: '#EB97EB',
  },
  {
    label: 'Black',
    hexCode: '#333333',
  },
  {
    label: 'Yellow',
    hexCode: '#FAD000',
  },
  {
    label: 'Grey',
    hexCode: '#B8B8B8',
  },
  {
    label: 'Orange',
    hexCode: '#FF9933',
  },
  {
    label: 'White',
    hexCode: '#FFFFFF',
  },
  {
    label: 'Purple',
    hexCode: '#AF38EB',
  },
  {
    label: 'Navy',
    hexCode: '#414796',
  },
];
const ColorTag: React.FC<IColorTag> = ({
  label,
  hexCode,
  onClose,
  onClick,
  background,
}) => {
  return (
    <div
      className={styles.Tag}
      onClick={onClick}
      style={{ background: background }}
    >
      <div className={styles.colorDot} style={{ background: hexCode }} />
      {label}
      {onClose && <label className={styles.closeLabel}></label>}
    </div>
  );
};

export default ColorTag;
