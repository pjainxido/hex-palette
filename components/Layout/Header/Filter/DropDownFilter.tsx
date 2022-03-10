import styles from './Filter.module.scss';
const DropDownFilter = () => {
  return (
    <div className={styles.DropDownFilter}>
      <div className={styles.sortOptions}>
        <div>Newest</div>
        <div>Hot</div>
        <div>Random</div>
        <div>Oldest</div>
        <label>TimeLimit</label>
        <div>Day</div>
        <div>Month</div>
        <div>Year</div>
      </div>
      <div className={styles.tagOptions}></div>
    </div>
  );
};

export default DropDownFilter;
