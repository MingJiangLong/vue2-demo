import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.timeout = 2000;
axios.defaults.baseURL = '/'
axios.interceptors.request.use(config => {

  // 请求拦截
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.request.use(resp => {

  // 返回拦截
  return Promise.resolve(resp);
}, error => {
  return Promise.resolve(error)
})

/**
 * Get请求
 * @param url 请求路由
 * @param params 路径query
 * @param config 配置
 */
export function get<P = any>(url: string, params?: { [k: string]: P }, config?: AxiosRequestConfig) {
  return axios.get(url, {
    params,
    ...config,
    method: 'GET',
  })
}

/**
 * Post请求
 * @param url 请求路径 
 * @param data 请求参数
 * @param config 配置
 */
export function post<D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
  return axios.post(url, data, {
    ...config,
    method: 'POST',
  })
}

export default {
  post,
  get
}