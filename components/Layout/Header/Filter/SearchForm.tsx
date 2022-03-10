import styles from './Filter.module.scss';

interface ISearchFrom {
  showDropdown: boolean;
}

const SearchForm: React.FC<ISearchFrom> = ({ showDropdown }) => {
  return (
    <div className={styles.SearchForm}>
      {showDropdown && <div className={styles.activeTags}></div>}
      <input className={styles.Input} />
    </div>
  );
};

export default SearchForm;
