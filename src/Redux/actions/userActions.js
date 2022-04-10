import { LOGIN } from "./../reducers/userReducer";

export const login = (email, password) => async (dispatch) => {
  localStorage.setItem("user", JSON.stringify({ email, password }));
  dispatch({ type: LOGIN, payload: { email, password } });
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email, password, firstName, lastName })
    );
    dispatch({
      type: LOGIN,
      payload: { email, password, firstName, lastName },
    });
  };
