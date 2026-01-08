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
        // Add any auth tokens here if needed in future
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
            // Server responded with error
            console.error('API Error:', error.response.data);
            throw new Error(error.response.data.message || 'An error occurred');
        } else if (error.request) {
            // Request made but no response
            console.error('Network Error:', error.request);
            throw new Error('Network error. Please check your connection.');
        } else {
            // Something else happened
            console.error('Error:', error.message);
            throw new Error('An unexpected error occurred');
        }
    }
);

export const autheticate = async (data) => {
    try {
        const response = await api.post('/insert', data);
        return response.data;
    } catch (error) {
        console.error('Error listing artwork:', error.message);
        throw error;
    }
};

export default api;