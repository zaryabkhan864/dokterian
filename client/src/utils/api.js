import axios from 'axios';

const instance = axios.create({
baseURL: 'http://192.168.1.6:8523/api',
    timeout: 10000,
  });
export default instance;