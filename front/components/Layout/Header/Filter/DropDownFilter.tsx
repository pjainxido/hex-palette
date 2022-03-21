import ColorTag, { colorTagList } from 'components/Tag/ColorTag';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import {
  addTag,
  changeSort,
  changeTimeFrame,
  removeTag,
  SortOption,
  TimeFrame,
} from 'store/modules/filter';

import styles from './Filter.module.scss';

interface IFilterLabel {
  activeFilter: () => void;
  isActive: boolean;
  label: string;
}

interface ITagFilter extends IFilterLabel {
  unActiveFilter: () => void;
}

interface IColorTagFilter extends ITagFilter {
  hexCode: string;
}

const ColorTagFilter: React.FC<IColorTagFilter> = ({
  isActive,
  activeFilter,
  unActiveFilter,
  hexCode,
  label,
}) => {
  return (
    <ColorTag
      onClick={() => (isActive ? unActiveFilter() : activeFilter())}
      hexCode={hexCode}
      label={label}
      background={isActive ? '#ececec' : undefined}
    />
  );
};

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

interface IDropDownSection {
  title: string;
  children: React.ReactNode;
}

const DropDownSection = ({ title, children }: IDropDownSection) => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>{title}</div>
      {children}
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

  const activeTag = (tag: string) => {
    dispatch(addTag(tag));
  };

  const unActiveTag = (tag: string) => {
    dispatch(removeTag(tag));
  };

  return (
    <div className={styles.DropDownFilter}>
      <DropDownSection title="Sort">
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
      </DropDownSection>
      <DropDownSection title="TimeFrame">
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
      </DropDownSection>
      <DropDownSection title="ColorTag">
        {colorTagList.map(({ label, hexCode }, index) => (
          <ColorTagFilter
            label={label}
            key={index}
            isActive={tags.includes(label)}
            hexCode={hexCode}
            activeFilter={() => activeTag(label)}
            unActiveFilter={() => unActiveTag(label)}
          />
        ))}
      </DropDownSection>
    </div>
  );
};

export default DropDownFilter;
