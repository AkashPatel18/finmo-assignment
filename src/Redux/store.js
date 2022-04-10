import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  login: loginReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  login: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
