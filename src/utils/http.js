import axios from 'axios';
import { base } from '../config/endpoints';

export const http = axios.create({
  baseURL: base,
  headers: {
    'content-type': 'application/json',
  },
});

export const get = async (endpoint) => {
  try {
    const data = await http.get(endpoint);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};