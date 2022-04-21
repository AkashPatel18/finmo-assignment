import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducers";
import { loginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  login: loginReducer,
  products: productReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userItems = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const initialState = {
  login: { user: userInfoFromStorage },
  products: { cartItems: userItems },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
