import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import filter, { IFilterState } from './filter';

interface IState {
  filter: IFilterState;
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
        filter,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
