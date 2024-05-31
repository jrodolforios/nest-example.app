import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as https from 'https'
import { LoggerService } from './logger/logger.service';

@Injectable()
export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(private logger: LoggerService) {
    this.axiosInstance = axios.create({ httpsAgent : new https.Agent({ rejectUnauthorized: false }) });
  }

  async request<T>(config: AxiosRequestConfig): Promise<T> {
    const mergedConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        ...config.headers,
      },
    };
    const response: AxiosResponse<T> = await this.axiosInstance.request(mergedConfig);
    this.logger.debug("", { url : config.url, method : config.method, response: response.data, status: response.status })
    return response.data as T;
  }

  async get<T>(url: string, headers?: Record<string, string>, config?: AxiosRequestConfig): Promise<T> {
    return await this.request<T>({ ...config, method: 'GET', url, headers });
  }

  async post<T>(url: string, data?: any, headers?: Record<string, string>, config?: AxiosRequestConfig): Promise<T> {
    return await this.request<T>({ ...config, method: 'POST', url, data, headers });
  }

  put<T>(url: string, data?: any, headers?: Record<string, string>, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT', url, data, headers });
  }

  delete<T>(url: string, headers?: Record<string, string>, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE', url, headers });
  }
}