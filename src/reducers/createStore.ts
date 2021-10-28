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
import ticketReducer from './ticket';
import loadingReducer from './loading';

const store: Store<any, AnyAction> = createStore(
  combineReducers(
    {
      auth: authReducer,
      event: eventReducer,
      ticket: ticketReducer,
      loading: loadingReducer,
    },
  ),
  compose(applyMiddleware(thunk)),
);

export default store;
