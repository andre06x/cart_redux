import axios from 'axios';
import json from './server.json';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;