import axios from "axios"
import { GET_PROD_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE } from "../constants/prodConstants";

// Use environment variable for API URL with fallback for development
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:6969";

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = (paintType) => async (dispatch) => {
    try {
        const response = await api.post('/products', { type: paintType });
        
        if (process.env.NODE_ENV !== 'production') {
            console.log("getProducts.js: ", paintType);
        }
        
        // Handle new API response format with success flag
        if (response.data.success) {
            dispatch({ type: GET_PROD_SUCCESS, payload: response.data.data || response.data });
        } else {
            dispatch({ type: GET_PROD_FAILURE, payload: response.data.message || 'Failed to fetch products' });
        }
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch products';
        dispatch({ type: GET_PROD_FAILURE, payload: errorMessage });
    }
};
        