import { useState, useRef } from 'react';

import DropDownFilter from './DropDownFilter';
import SearchForm from './SearchForm';
import useDetectClickOutside from 'hooks/useDetectClickOutside';

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
