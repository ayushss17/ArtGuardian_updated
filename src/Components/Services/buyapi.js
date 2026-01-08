import axios from "axios";

// Use environment variable for API URL with fallback for development
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:6969";

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    timeout: 30000, // 30 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('API Error:', error.response.data);
            throw new Error(error.response.data.message || 'An error occurred');
        } else if (error.request) {
            console.error('Network Error:', error.request);
            throw new Error('Network error. Please check your connection.');
        } else {
            console.error('Error:', error.message);
            throw new Error('An unexpected error occurred');
        }
    }
);

export const buyprocess = async (buypaint, metamaskAccount) => {
    try {
        // Validate wallet address format
        if (!metamaskAccount || !/^0x[a-fA-F0-9]{40}$/.test(metamaskAccount)) {
            throw new Error('Invalid wallet address format');
        }
        
        const requestData = {
            ...buypaint,
            metamaskAccount: metamaskAccount
        };
        
        if (process.env.NODE_ENV !== 'production') {
            console.log('Purchasing artwork:', requestData);
        }
        
        const response = await api.post('/buy', requestData);
        return response.data;
    } catch (error) {
        console.error('Error purchasing artwork:', error.message);
        throw error;
    }
};

export default api;