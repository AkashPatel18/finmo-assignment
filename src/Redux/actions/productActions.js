import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS_FAIL,
  CALCULATE_TOTAL_PRICE,
  REMOVE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
} from "../reducers/productReducers";
import { BASE_URL } from "../../Utils/api";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
} from "./../reducers/productReducers";

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_PRODUCTS });
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_PRODUCTS_FAIL });
  }
};

export const addToCart = (product) => (dispatch) => {
  let itemsFromStorage = localStorage.getItem("items");
  itemsFromStorage = JSON.parse(itemsFromStorage);
  console.log(itemsFromStorage);
  // localStorage.setItem("items", itemsFromStorage.concat(product));
  if (itemsFromStorage == null) {
    localStorage.setItem("items", JSON.stringify([product]));
  } else {
    localStorage.setItem(
      "items",
      JSON.stringify([...itemsFromStorage, product])
    );
  }
  dispatch({ type: ADD_TO_CART, payload: product });
  dispatch({ type: CALCULATE_TOTAL_PRICE, payload: product.price });
};

export const removeProduct = (product) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT, payload: product.id });
};

export const increamentProduct = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const decreamentProduct = (product) => (dispatch) => {
  dispatch({ type: REMOVE_SINGLE_PRODUCT, payload: product });
};
