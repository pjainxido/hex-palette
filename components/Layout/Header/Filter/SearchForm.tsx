import { ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from 'store/modules/filter';
import styles from './Filter.module.scss';

interface ISearchFrom {
  showDropdown: boolean;
}

const SearchForm: React.FC<ISearchFrom> = ({ showDropdown }) => {
  const dispatch = useDispatch();

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle(e.target.value));
  };

  return (
    <div className={styles.SearchForm}>
      {showDropdown && <div className={styles.activeTags}></div>}
      <input className={styles.Input} onChange={changeInput} />
    </div>
  );
};

export default SearchForm;
