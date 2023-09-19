import type { Data } from "@/types/request";
import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { showLoadingToast, closeToast } from 'vant';
const instance = axios.create({
  baseURL: 'http://ceshi.dishait.cn',
});

// 添加请求拦截器
instance.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  // 在发送请求之前做些什么
  showLoadingToast({
    duration: 0,
    forbidClick: true,
    message: '加载中',
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response: AxiosResponse) {
  // 对响应数据做点什么
  closeToast();
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const request = <T>(url: string, method: Method, submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
