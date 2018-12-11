import axios from 'axios';
import qs from 'qs';
import app from '@/main'; // import the instance

/* eslint-disable func-names, prefer-arrow-callback */
const Http = axios.create({
<<<<<<< HEAD
  baseURL: '/mystery/member/',
  transformRequest: [function (data) {
    const returnData = qs.stringify(data);

=======
  baseURL: '/api',
  transformRequest: [function (data) {
    const returnData = qs.stringify(data);
>>>>>>> dc tranning done
    return returnData;
  }],
});

Http.interceptors.request.use((config) => {
  app.$Progress.start();
  return config;
});
Http.interceptors.response.use(function (response) {
  app.$Progress.finish();
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default Http;
