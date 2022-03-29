import { ITag } from '.';

import styles from './Tag.module.scss';

export interface IColorTag extends ITag {
  hexCode: string;
  background?: string;
}
// interface IColorTag {
//   label: string;
//   hexCode: string;
// }

export const colorTagList: IColorTag[] = [
  {
    id: 'blue',
    label: 'Blue',
    hexCode: '#4073FF',
  },
  {
    id: 'green',
    label: 'Green',
    hexCode: '#7ECC49',
  },
  {
    id: 'red',
    label: 'Red',
    hexCode: '#DB4035',
  },
  {
    id: 'pink',
    label: 'Pink',
    hexCode: '#EB97EB',
  },
  {
    id: 'black',
    label: 'Black',
    hexCode: '#333333',
  },
  {
    id: 'yellow',
    label: 'Yellow',
    hexCode: '#FAD000',
  },
  {
    id: 'grey',
    label: 'Grey',
    hexCode: '#B8B8B8',
  },
  {
    id: 'orange',
    label: 'Orange',
    hexCode: '#FF9933',
  },
  {
    id: 'white',
    label: 'White',
    hexCode: '#FFFFFF',
  },
  {
    id: 'purple',
    label: 'Purple',
    hexCode: '#AF38EB',
  },
  {
    id: 'navy',
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
