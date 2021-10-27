import { useSelector } from 'react-redux';
import { RootReducer } from '../models/reducers';

export const useReduxState = () => useSelector((state: RootReducer) => state);
