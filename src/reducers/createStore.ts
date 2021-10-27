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
import eventReducer from './event';

const store: Store<any, AnyAction> = createStore(
  combineReducers(
    {
      auth: authReducer,
      event: eventReducer,
    },
  ),
  compose(applyMiddleware(thunk)),
);

export default store;
