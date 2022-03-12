//ACTIONS
const RESET = 'filter/RESET_TAG' as const;
const ADD_TAG = 'filter/ADD_TAG' as const;
const REMOVE_TAG = 'filter/REMOVE_TAG' as const;

export const reset = () => ({ type: RESET });

export const addTag = (tag: string) => ({
  type: ADD_TAG,
  tag: tag,
});

export const removeTag = (tag: string) => ({
  type: REMOVE_TAG,
  tag: tag,
});

export type FilterAction = ReturnType<
  typeof addTag | typeof removeTag | typeof reset
>;

//REDUCERS
export type SortOption = 'newest' | 'hot' | 'random' | 'oldest';
export type TimeLimit = null | 'day' | 'month' | 'year';

export interface IFilterState {
  tags: string[];
  timeLimit: TimeLimit;
  sortBy: SortOption;
  title: string;
}

export const initalFilterState: IFilterState = {
  tags: [],
  timeLimit: null,
  sortBy: 'newest',
  title: '',
};

const filterReducer = (
  state: IFilterState = initalFilterState,
  action: FilterAction
) => {
  switch (action.type) {
    case ADD_TAG:
      return { ...state, tags: [...state.tags, action.tag] };
    case REMOVE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter((tag) => tag !== action.tag)],
      };

    default:
      return state;
  }
};
export default filterReducer;