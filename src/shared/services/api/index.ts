import axios, {
  Axios,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import Config from '@/config';
import type Services from '@/shared/services';

type Headers = Record<string, string>

class APIService {
  private services: Services;

  private axios: Axios;

  private config: typeof Config.api;

  private readonly defaultHeaders: Headers;

  constructor(services:Services, config:typeof Config.api, lang:string) {
    this.services = services;
    this.axios = axios.create();
    this.config = config;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    };
  }

  public async req<T = any, D = any>({
    url,
    method = 'GET',
    headers = {},
    ...options
  }:AxiosRequestConfig<D>):Promise<AxiosResponse<T, D>> {
    if (!url?.match(/^(http|\/\/)/)) url = this.config.baseUrl + url;
    const res = await this.axios.request({
      url,
      method,
      headers: { ...this.defaultHeaders, ...headers },
      ...options,
    });
    return res;
  }
}

export default APIService;
