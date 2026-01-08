import { act } from "react-dom/test-utils";
import { GET_PROD_FAILURE,GET_PROD_SUCCESS,GET_USER_PRODUCTS_FAILURE,GET_USER_PRODUCTS_SUCCESS } from "../constants/prodConstants";
import { type } from "@testing-library/user-event/dist/type";


const initialState = {
    products: [],
    error: null,
  };
export const getProductsReducer = (state = initialState,action)=>{

    switch(action.type){
        case GET_PROD_SUCCESS:
            return { products : action.payload}
        case GET_PROD_FAILURE:
            return { error : action.payload}
        case GET_USER_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case GET_USER_PRODUCTS_FAILURE:
            return {error: action.payload}
        default:
            return state;
    }
    
}
  