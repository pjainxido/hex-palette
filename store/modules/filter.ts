//ACTIONS
const RESET = 'filter/RESET_TAG' as const;
const ADD_TAG = 'filter/ADD_TAG' as const;
const REMOVE_TAG = 'filter/REMOVE_TAG' as const;
const CHANGE_TITLE = 'filter/CHANGE_TITLE' as const;
const CHANGE_SORT = 'filter/CHANGE_SORT' as const;
const CHANGE_TIME_FRAME = 'filter/CHANGE_TIME_FRAME' as const;

export const reset = () => ({ type: RESET });

export const changeSort = (sort: SortOption) => ({
  type: CHANGE_SORT,
  sort: sort,
});

export const changeTimeFrame = (timeFrame: TimeFrame) => ({
  type: CHANGE_TIME_FRAME,
  timeFrame: timeFrame,
});

export const addTag = (tag: string) => ({
  type: ADD_TAG,
  tag: tag,
});

export const changeTitle = (title: string) => ({
  type: CHANGE_TITLE,
  title: title,
});

export const removeTag = (tag: string) => ({
  type: REMOVE_TAG,
  tag: tag,
});

export type FilterAction = ReturnType<
  | typeof addTag
  | typeof removeTag
  | typeof reset
  | typeof changeTitle
  | typeof changeTimeFrame
  | typeof changeSort
>;

//REDUCERS
export type SortOption = 'new' | 'hot' | 'random' | 'old';
export type TimeFrame = null | 'week' | 'day' | 'month' | 'year';

export interface IFilterState {
  tags: string[];
  timeFrame: TimeFrame;
  sort: SortOption;
  title: string;
}

export const initalFilterState: IFilterState = {
  tags: [],
  timeFrame: null,
  sort: 'new',
  title: '',
};

const filterReducer = (
  state: IFilterState = initalFilterState,
  action: FilterAction
): IFilterState => {
  switch (action.type) {
    case ADD_TAG:
      return { ...state, tags: [...state.tags, action.tag] };
    case REMOVE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter((tag) => tag !== action.tag)],
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case CHANGE_TIME_FRAME:
      return {
        ...state,
        timeFrame: action.timeFrame,
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.sort,
      };
    default:
      return state;
  }
};
export default filterReducer;
