import axios from 'axios';
import {alertMessage, Log} from './utils';

const request = url => {
  let instance = axios.create({});
  instance.interceptors.request.use(async config => {
    config.baseURL = url;
    return config;
  });
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      Log('error.response.data.error', error.response.data.message, error);
      alertMessage(error.response.data.message);
      return error.response;
    },
  );
  return instance;
};

export default request();
