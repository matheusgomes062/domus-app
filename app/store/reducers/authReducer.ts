interface AuthState {
  token: string | null;
  userLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  userLoggedIn: false,
};

const authReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER_LOGGED_IN':
      return {
        ...state,
        userLoggedIn: action.payload,
      };
    case 'SET_USER_LOGIN':
      return {
        ...state,
        token: action.payload,
        userLoggedIn: true,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        token: null,
        userLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;