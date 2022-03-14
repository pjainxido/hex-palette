import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { changeTimeFrame, TimeFrame } from 'store/modules/filter';

import styles from './Filter.module.scss';

const DropDownFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  const handleTimeFrameFilter = (timeFrame: TimeFrame) => {
    dispatch(changeTimeFrame(timeFrame));
  };

  return (
    <div className={styles.DropDownFilter}>
      <div className={styles.sortOptions}>
        <div>Newest</div>
        <div>Hot</div>
        <div>Random</div>
        <div>Oldest</div>
        <label>TimeFrame</label>
        <div onClick={() => handleTimeFrameFilter(null)}>Default</div>
        <div onClick={() => handleTimeFrameFilter('day')}>Day</div>
        <div onClick={() => handleTimeFrameFilter('week')}>Week</div>
        <div onClick={() => handleTimeFrameFilter('month')}>Month</div>
        <div onClick={() => handleTimeFrameFilter('year')}>Year</div>
      </div>
      <div className={styles.tagOptions}></div>
    </div>
  );
};

export default DropDownFilter;
