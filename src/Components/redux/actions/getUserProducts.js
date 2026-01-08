import axios from "axios"
import { GET_PROD_SUCCESS, GET_USER_PRODUCTS_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE, GET_USER_PRODUCTS_FAILURE } from "../constants/prodConstants";

// Use environment variable for API URL with fallback for development
const API_URL = process.env.REACT_APP_API_URL;

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUserProducts = (metamaskAccount) => async (dispatch) => {
    if (!metamaskAccount) {
        console.error('Metamask account is not defined.');
        return;
    }

    // Validate wallet address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(metamaskAccount)) {
        console.error('Invalid wallet address format');
        dispatch({ type: GET_USER_PRODUCTS_FAILURE, payload: 'Invalid wallet address format' });
        return;
    }

    try {
        const requestData = {
            metamaskAccount: metamaskAccount
        };

        const response = await api.post('/getUserProd', requestData);
        
        if (process.env.NODE_ENV !== 'production') {
            console.log('User products fetched:', response.data);
        }
        
        // Handle new API response format
        if (response.data.success) {
            dispatch({ type: GET_USER_PRODUCTS_SUCCESS, payload: response.data.data || response.data.message || [] });
        } else {
            dispatch({ type: GET_USER_PRODUCTS_FAILURE, payload: response.data.message || 'Failed to fetch user products' });
        }

    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch user products';
        dispatch({ type: GET_USER_PRODUCTS_FAILURE, payload: errorMessage });
    }
};
    
