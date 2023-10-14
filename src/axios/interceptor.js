import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', // Use the base API URL from environment variables
    headers: {
        'Content-Type': 'application/json', // Set default Content-Type header
    },
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // You can add headers or perform other actions before the request is sent
        // For example, you can add an authorization token
        // config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        // You can process the response data here
        return response.data;
    },
    (error) => {
        // Handle response errors
        // For example, you can check for specific status codes and take appropriate actions
        if (error.response.status === 401) {
            // Handle unauthorized access
        } else {
            // Handle other errors
        }
        return Promise.reject(error);
    }
);

export default instance;
