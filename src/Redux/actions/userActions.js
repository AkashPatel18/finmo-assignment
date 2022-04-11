import { LOGIN, LOGIN_ERROR, LOGOUT } from "./../reducers/userReducer";

export const login = (email, password) => async (dispatch) => {
  let storedUserInfo = localStorage.getItem("signedUser");

  storedUserInfo = JSON.parse(storedUserInfo);

  if (storedUserInfo.password === password && storedUserInfo.email === email) {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    dispatch({ type: LOGIN, payload: { email, password } });
  } else {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email, password, firstName, lastName })
    );
    localStorage.setItem(
      "signedUser",
      JSON.stringify({ email, password, firstName, lastName })
    );
    dispatch({
      type: LOGIN,
      payload: { email, password, firstName, lastName },
    });
  };
