import { DESCREASE_LOADING, INCREASE_LOADING } from '../actions/actionTypes';

const initialState: reducers.LoadingReducer = {
  amount: 0,
};

const loadingReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case INCREASE_LOADING:
      return {
        ...state,
        amount: state.amount + 1,
      };
    break;
    case DESCREASE_LOADING:
      return {
        ...state,
        amount: state.amount - 1,
      };
    default:
      return state;
  }
};

export const isLoading = (state: reducers.LoadingReducer) => state.amount > 0;

export default loadingReducer;
