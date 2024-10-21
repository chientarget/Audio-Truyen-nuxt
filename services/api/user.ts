import axios from 'axios';

const API_BASE_URL = 'http://14.225.207.58:9898/api/v1';

// Function to get the current user's data
export const getUserData = async (token: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
};

// Example: Add more user-related functions here (e.g., update profile, change password)
