import { GET_USER_PRODUCTS_FAILURE,GET_USER_PRODUCTS_REQUEST,GET_USER_PRODUCTS_SUCCESS } from "../constants/prodConstants";

const initialState = {
    getUserProducts: {
        loading: false,
        error: null,
        products: [],
      },
  };

  export const userProductsReducer = (state = initialState.getUserProducts, action) => {
    switch (action.type) {
      case 'GET_USER_PRODUCTS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'GET_USER_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload, error: null }; // Update products within the existing state
      case 'GET_USER_PRODUCTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };