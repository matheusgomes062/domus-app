export const setToken = (token: string) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};

export const setUserLoggedIn = (isLoggedIn: boolean) => {
  return {
    type: 'SET_USER_LOGGED_IN',
    payload: isLoggedIn,
  };
};

export const setLogout = () => {
  return {
    type: 'SET_LOGOUT',
  };
};

export const setUserLogin = (token: string) => {
  return {
    type: 'SET_USER_LOGIN',
    payload: token,
  };
};