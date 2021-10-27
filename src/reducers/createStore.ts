import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth';

const store: Store<any, AnyAction> = createStore(
  combineReducers(
    {
      auth: authReducer,
    },
  ),
  compose(applyMiddleware(thunk)),
);

export default store;
