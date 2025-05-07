import axios from 'axios';

// Base API URL - change this to your actual API endpoint in production
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Create axios instance with custom config
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - useful for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - useful for handling errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};

    // Handle authentication errors
    if (status === 401) {
      // Redirect to login or refresh token
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // Log errors in development
    if (import.meta.env.DEV) {
      console.error('API Error:', error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;