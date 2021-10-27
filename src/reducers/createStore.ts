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

const store: Store<any, AnyAction> = createStore(
  combineReducers(
    {
      auth: authReducer,
      event: eventReducer,
      ticket: ticketReducer,
    },
  ),
  compose(applyMiddleware(thunk)),
);

export default store;
