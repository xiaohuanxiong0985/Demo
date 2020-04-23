import { axios } from './index';
import qs from 'qs'
export function login (data) {
  return axios.request({
    url: `user/login`,
    method: 'post',
    data: qs.stringify(data)
  });
}
export function user (params) {
  return axios.request({
    url: `users`,
    params
  });
}
export function prob (params) {
  return axios.request({
    url: `prob`,
    params
  })
}
