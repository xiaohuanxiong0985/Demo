import axios from 'axios';
import store from '../store';
class Service {
  constructor () {
    this.baseUrl = process.env.VUE_APP_BASE_API;
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'token': store.state.token || ''
      }
    };
    return config;
  }
  //  interceptor
  interceptors (instance) {
    //  request interceptor
    instance.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
    //  response interceptor
    instance.interceptors.response.use(response => {
      //  通过http返回的状态码进行判断
      const res = response.data;
      console.warn(res);
      if (response.status === 200) {
        return res;
      } else {
        alert(res.msg || '获取数据失败,请刷新页面重试');
        return Promise.reject(new Error(res.msg || 'Error'));
      }
    }, error => {
      console.warn(error.response.data);
      return Promise.reject(error);
      // }
    });
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}
export default Service;
