import { AxiosRequestConfig } from "axios";

export interface GetHttpAction {
  route?: string;
  url?: string;
  config?: AxiosRequestConfig<any>;
}

export interface PostHttpAction {
  route?: string;
  url: string;
  data?: any;
  config?: AxiosRequestConfig<any>;
}

export interface PatchHttpAction {
  route?: string;
  url: string;
  data?: any;
  config?: AxiosRequestConfig<any>;
}