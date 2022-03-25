import React from 'react';
import styles from './Tag.module.scss';

interface Tag {
  tagID: string;
  label: string;
}

export interface IColorTag extends Tag {
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
    tagID: 'blue',
    label: 'Blue',
    hexCode: '#4073FF',
  },
  {
    tagID: 'green',
    label: 'Green',
    hexCode: '#7ECC49',
  },
  {
    tagID: 'red',
    label: 'Red',
    hexCode: '#DB4035',
  },
  {
    tagID: 'pink',
    label: 'Pink',
    hexCode: '#EB97EB',
  },
  {
    tagID: 'black',
    label: 'Black',
    hexCode: '#333333',
  },
  {
    tagID: 'yellow',
    label: 'Yellow',
    hexCode: '#FAD000',
  },
  {
    tagID: 'grey',
    label: 'Grey',
    hexCode: '#B8B8B8',
  },
  {
    tagID: 'orange',
    label: 'Orange',
    hexCode: '#FF9933',
  },
  {
    tagID: 'white',
    label: 'White',
    hexCode: '#FFFFFF',
  },
  {
    tagID: 'purple',
    label: 'Purple',
    hexCode: '#AF38EB',
  },
  {
    tagID: 'navy',
    label: 'Navy',
    hexCode: '#414796',
  },
];

interface props {
  tag: IColorTag;
}

const ColorTag = ({ tag }: props) => {
  const { onClick, background, hexCode, onClose, label } = tag;
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
