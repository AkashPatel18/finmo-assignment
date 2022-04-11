export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: [], loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false };
    case FETCH_PRODUCTS_FAIL:
      return { error: "there is some error while fetching products" };
    default:
      return state;
  }
};
