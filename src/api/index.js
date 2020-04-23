import Server from '@/utils/axios';
export const axios = new Server();
//  get请求
export function GET (url, params) {
  return axios.request({
    url,
    params
  });
}
//  post请求
export function POST (url, data) {
  return axios.request({
    url,
    method: 'post',
    data
  });
}
//  put请求
export function PUT (url, data) {
  return axios.request({
    url,
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    data
  });
}
//  upload
export function UPLOAD (url, data) {
  return axios.request({
    url,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data
  });
}
