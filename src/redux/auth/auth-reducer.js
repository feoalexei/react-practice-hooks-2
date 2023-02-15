import { authTypes } from './auth-types';

const initialState = { isAuth: false, name: '' };

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authTypes.login:
      return { isAuth: true, name: payload };
    case authTypes.logout:
      return initialState;

    default:
      return state;
  }
};
