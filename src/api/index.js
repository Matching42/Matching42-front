import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gentle-tor-36751.herokuapp.com/'
});
