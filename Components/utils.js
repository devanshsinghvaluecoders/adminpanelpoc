import axios from 'axios';

export const connection = axios.create({
  baseURL: '/api',
  //for timeout issue
  // timeout: 60000,
  // TODO Test impact of this setting.
  // decompress: false
});
