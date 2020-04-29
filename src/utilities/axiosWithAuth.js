import axios from 'axios';

export const axiosWithAuth = () => {
  const key = localStorage.getItem('token');

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': key ? `${key}` : null
    },
  });

  return axiosInstance;
};