import axios from 'axios';

const BASE_URL = 'https://mandarin.api.weniv.co.kr';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
