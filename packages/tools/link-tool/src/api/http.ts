import axios, { AxiosError, AxiosHeaders } from 'axios';
import CONSTANTS from '../config/constant';

const paramsSerializer = (params: object) =>
  Object.entries(params)
    .map(([key, value]) => key + '=' + (value || ''))
    .join('&') || '';

export const http = axios.create({
  paramsSerializer,
});

http.interceptors.request.use(
  (config) => {
    if (config.url && !config.url.includes('/api')) {
      if (config.url.startsWith('/public/')) {
        config.url = '/api' + config.url;
      } else {
        config.url = '/api/io/crm' + config.url;
      }
    }

    var authPrefix = '';
    if (config.url && (config.url.includes('config') || config.url.includes('login'))) {
      authPrefix = 'Bearer';
    } else {
      authPrefix = 'Basic';
    }
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    if (global.localStorage) {
      const authToken = localStorage.getItem('user-auth-token');
      if (authToken) {
        config.headers.set('Authorization', authPrefix + ' ' + authToken);
      }
    }

    // console.log('http call: ', config);

    return config;
  },
  (error) => Promise.reject(responseError(error) || CONSTANTS.api_error),
);

http.interceptors.response.use(
  (r) => r,
  (error) => Promise.reject(responseError(error) || CONSTANTS.api_error),
);

export function responseError(error: AxiosError<any, unknown>) {
  if (error.response && error.response.data) {
    if (error.response.data.errors && error.response.data.errors.length) {
      return error.response.data.errors.map((e: any) => e.defaultMessage).join('\n');
    } else if (error.response.data.msg) {
      return error.response.data.msg;
    } else {
      return error.message;
    }
  } else {
    return error.message;
  }
}
