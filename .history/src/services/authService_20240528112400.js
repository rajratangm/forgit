

// import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api/auth';
// const API_URL = 'https://koi-2p2q.onrender.com/api/auth';


// export const register = async ({ name, email, password }) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, {
//       name,
//       email,
//       password
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error during registration:', error);
//     throw error;
//   }
// };

// export const login = async ({ email, password }) => {
//   try {
//     console.log('login')
//     const response = await axios.post(`${API_URL}/login`, {
//       email,
//       password
//     });
//     console.log('logincompleted')
//     return response.data;
//   } catch (error) {
//     console.error('Error during login:', error);
//     throw error;
//   }
// };


const API_URL = 'https://koi-2p2q.onrender.com/api/auth';

export const register = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    console.log('login');
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('logincompleted');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
