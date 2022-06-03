import axios from 'axios';
import json from './server.json';

const api = axios.create({
  baseURL: './server.json'
})

export default api;