import { DESCREASE_LOADING, INCREASE_LOADING } from './actionTypes';

export const addLoading = () => (
  dispatch: any
) => dispatch({ type: INCREASE_LOADING });

export const removeLoading = () => (
  dispatch: any
) => dispatch({ type: DESCREASE_LOADING });
