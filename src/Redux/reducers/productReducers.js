export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";

export const productReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: [], loading: true, cartItems: [] };
    case FETCH_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, cartItems: [] };
    case FETCH_PRODUCTS_FAIL:
      return {
        error: "there is some error while fetching products",
        cartItems: [],
      };
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
