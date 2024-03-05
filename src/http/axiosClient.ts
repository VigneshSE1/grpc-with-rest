import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CONFIG } from '../environment/environment.appSettings';

export class AxiosClient {
  private instance: AxiosInstance;

  constructor(headers?: Record<string, string>) {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: CONFIG.REWARD_RALLY_BASE_ENDPOINT,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    this.instance = axios.create(axiosConfig);
  }

  // HTTP methods
  async get<T>(url: string, params?: Record<string, any>): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, { params });
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }
}
