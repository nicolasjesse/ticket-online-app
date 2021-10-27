import {
  AUTH_LOGIN, AUTH_LOGOUT, AUTH_ME, AUTH_CHECK_LOGGED, AUTH_REGISTER,
} from '../actions/actionTypes';

const initialState: reducers.AuthReducer = {
  checkLogged: false,
  me: {
    id: '',
    name: '',
    email: '',
    password: '',
    profileType: 0,
  },
  authToken: {
    token: null,
  },
};

const authReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authToken: action.payload,
      };
    case AUTH_ME:
      return {
        ...state,
        me: action.payload,
      };
    case AUTH_CHECK_LOGGED:
      return {
        ...state,
        checkLogged: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        checkLogged: false,
        me: null,
        authToken: {
          token: null,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
