import request from "./request";
import type { Appindex, book } from '@/types/index'
//首页数据
export const getApi = () => request<Appindex>('/app_index', 'GET')
//音乐
export const getmusicResourecs = () => request('/musicResourecs', 'GET')
//看榜单
export const getreadListApi = () => request('/readList', 'GET')
//图书详情
export const getBookApi = () => request<book>('/book', 'GET')
export const gettestSynopsisApi = () => request('/testSynopsis', 'GET')
//小说
export const gettestContentApi = () => request('/testContent', 'GET')
