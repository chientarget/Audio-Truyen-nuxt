import axios from 'axios';

const API_BASE_URL = 'http://14.225.207.58:9898/api/v1';

// Define a function to handle login
export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            username,
            password,
        });
        return response.data; // Return the response data (tokens, admin status, etc.)
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Throw the error for further handling
    }
};
