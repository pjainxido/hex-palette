import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import {
  changeSort,
  changeTimeFrame,
  SortOption,
  TimeFrame,
} from 'store/modules/filter';

import styles from './Filter.module.scss';

interface IFilterLabel {
  activeFilter: () => void;
  isActive: boolean;
  label: string;
}

const FilterLabel: React.FC<IFilterLabel> = ({
  isActive,
  label,
  activeFilter,
}) => {
  return (
    <div className={styles.FilterLabel} onClick={() => activeFilter()}>
      <div className={isActive ? styles.active : styles.unActive}>{label}</div>
    </div>
  );
};

const DropDownFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const { tags, timeFrame, sort } = filter;

  const handleSortOption = (sort: SortOption) => {
    dispatch(changeSort(sort));
  };

  const handleTimeFrameFilter = (timeFrame: TimeFrame) => {
    dispatch(changeTimeFrame(timeFrame));
  };

  return (
    <div className={styles.DropDownFilter}>
      <div className={styles.section}>
        <div className={styles.title}>Sort</div>
        <FilterLabel
          activeFilter={() => handleSortOption('new')}
          isActive={sort === 'new'}
          label="New"
        />
        <FilterLabel
          activeFilter={() => handleSortOption('hot')}
          isActive={sort === 'hot'}
          label="Hot"
        />
        <FilterLabel
          activeFilter={() => handleSortOption('random')}
          isActive={sort === 'random'}
          label="Random"
        />
        <FilterLabel
          activeFilter={() => handleSortOption('old')}
          isActive={sort === 'old'}
          label="Old"
        />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>TimeFrame</div>
        <FilterLabel
          activeFilter={() => handleTimeFrameFilter(null)}
          isActive={timeFrame === null}
          label="Default"
        />
        <FilterLabel
          activeFilter={() => handleTimeFrameFilter('day')}
          isActive={timeFrame === 'day'}
          label="Day"
        />
        <FilterLabel
          activeFilter={() => handleTimeFrameFilter('week')}
          isActive={timeFrame === 'week'}
          label="Week"
        />
        <FilterLabel
          activeFilter={() => handleTimeFrameFilter('month')}
          isActive={timeFrame === 'month'}
          label="Month"
        />
        <FilterLabel
          activeFilter={() => handleTimeFrameFilter('year')}
          isActive={timeFrame === 'year'}
          label="Year"
        />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Tag</div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>ColorTag</div>
      </div>
    </div>
  );
};

export default DropDownFilter;
