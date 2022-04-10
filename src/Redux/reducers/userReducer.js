export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    default:
      return state;
  }
};
