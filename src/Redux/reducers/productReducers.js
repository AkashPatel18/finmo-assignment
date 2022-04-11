export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CALCULATE_TOTAL_PRICE = "CALCULATE_TOTAL_PRICE";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const productReducer = (
  state = { cartItems: [], totalPrice: 0 },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: [], loading: true, ...state };
    case FETCH_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, ...state };
    case FETCH_PRODUCTS_FAIL:
      return {
        error: "there is some error while fetching products",
        cartItems: [],
      };
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CALCULATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.cartItems.reduce(
          (acc, curr) => (acc += curr.price),
          0
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};
