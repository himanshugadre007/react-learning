import axios from 'axios';

const api = axios.create({
  baseURL: 'https://faisals-static-server.herokuapp.com/'
});

export default api;