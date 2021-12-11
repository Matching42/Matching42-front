import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://matching42-dev-server.cf'
});
