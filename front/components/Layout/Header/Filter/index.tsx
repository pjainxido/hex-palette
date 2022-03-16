import { useState, useRef } from 'react';

import DropDownFilter from './DropDownFilter';
import SearchForm from './SearchForm';
import useDetectClickOutside from 'hooks/useDetectClickOutside';

interface IColorTag {
  label: string;
  hexCode: string;
}

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

import styles from './Filter.module.scss';

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const filterRef = useRef(null);

  useDetectClickOutside(filterRef, () => setShowDropdown(false));

  return (
    <div
      className={styles.Filter}
      ref={filterRef}
      onClick={() => setShowDropdown(true)}
    >
      <SearchForm showDropdown={showDropdown} />
      {showDropdown && <DropDownFilter />}
    </div>
  );
};

export default Filter;
