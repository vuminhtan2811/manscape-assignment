/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER_ERROR, FORBIDDEN } from 'constants/http-status';

const singleton = Symbol();
const singletonEnforcer = Symbol();
const BASE_URL = '';

class ApiService {
  session: AxiosInstance;

  constructor(enforcer: typeof singletonEnforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    this.session = axios.create({
      baseURL: `${BASE_URL}`,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });

    this.session.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: { config: any; response: { status: any; data: any } }) => {
        const originalRequest = error.config;
        if (!originalRequest?._retry) {
          switch (error.response ? error.response.status : null) {
            case UNAUTHORIZED:
              originalRequest._retry = true;
              // remove auth token here
              window.location.reload();
              break;

            case FORBIDDEN:
              toast("This is a resource that you're not allowed to access", { type: 'warning' });
              break;

            case BAD_REQUEST:
              // TODO Declare message displayed to user know clearly about the error.
              // TODO - show error exact from server
              // * Show error at call not here
              toast('Invalid field values', { type: 'error' });
              throw error;

            case INTERNAL_SERVER_ERROR:
              toast('Internal server error, please try again later!', { type: 'error' });
              break;

            default:
              if (error.response?.data?.apiError?.message) {
                toast(error.response.data.apiError.message, { type: 'error' });
              }
              throw error;
          }
        }

        throw error;
      },
    );
  }

  static get instance(): ApiService {
    const _this = this as any;
    if (!_this[singleton]) {
      _this[singleton] = new ApiService(singletonEnforcer);
    }

    return _this[singleton];
  }

  authorization(token: string) {
    this.session.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  options: AxiosInstance['options'] = (...params) => this.session.options(...params);

  get: AxiosInstance['get'] = (...params) => this.session.get(...params);

  post: AxiosInstance['post'] = (...params) => this.session.post(...params);

  put: AxiosInstance['put'] = (...params) => this.session.put(...params);

  delete: AxiosInstance['delete'] = (...params) => this.session.delete(...params);

  patch: AxiosInstance['patch'] = (...params) => this.session.patch(...params);
}

export const API = ApiService.instance;
