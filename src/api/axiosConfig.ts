import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
});

export default axiosConfig;
