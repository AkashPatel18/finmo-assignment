import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS_FAIL,
  CALCULATE_TOTAL_PRICE,
  REMOVE_PRODUCT,
} from "../reducers/productReducers";
import { BASE_URL } from "./../../utils/api";
import { FETCH_PRODUCTS_SUCCESS } from "./../reducers/productReducers";

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_PRODUCTS_FAIL });
  }
};

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  dispatch({ type: CALCULATE_TOTAL_PRICE, payload: product.price });
};

export const removeProduct = (product) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT, payload: product.id });
};
