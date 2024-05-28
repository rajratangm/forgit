

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, {
      name,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    console.log('login')
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    console.log('logincompleted')
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
