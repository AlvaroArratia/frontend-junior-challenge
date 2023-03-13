import axios from 'axios';
import { API_URL } from './constants';

const axiosConfig = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export default axiosConfig;
