export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload, error: null };
    case LOGOUT:
      return { user: null, error: null };
    case LOGIN_ERROR: {
      return { error: "enter correct password & email" };
    }
    default:
      return state;
  }
};
