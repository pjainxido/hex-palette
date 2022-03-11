import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import filterReducer, { IFilterState } from './filter';

// const rootReducer = combineReducers({
//   filterReducer,
// });

interface IState {
  filterReducer: IFilterState;
}

const rootReducer = (
  state: IState | undefined,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    // 서버 사이드 데이터를 클라이언트 사이드 Store에 통합.
    case HYDRATE:
      return { ...action.payload };
    default: {
      const combineReducer = combineReducers({
        filterReducer,
      });
      return combineReducer(state, action.tag);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
