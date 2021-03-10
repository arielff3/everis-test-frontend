import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.191.58.189:3333/',
})