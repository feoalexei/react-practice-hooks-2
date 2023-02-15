import { authTypes } from './auth-types';

export const authActions = {
  loginAction: name => {
    return { type: authTypes.login, payload: name };
  },
  logoutAction: () => {
    return { type: authTypes.logout };
  },
};
