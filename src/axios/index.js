import axios from 'axios';
import NProgress from 'nprogress'

// 设置axios默认请求地址
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5fa8e38646fe9a0d32af2b73/api';
// 携带cookie
axios.defaults.withCredentials = true;
// 请求超时时长
axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(config => {
  NProgress.start();
  return config
}, err => {
  return err
})

// 响应拦截器
axios.interceptors.response.use(res => {
  NProgress.done();
  return res.data;
}, err => {
  return err
})

/**
 * @param {string} method 请求方式
 * @param {string} url url
 * @param {*} data 默认post参数
 * @param {*} headers
 */
const serve = {
  get(url = null, headers = {}) {
    return new Promise((resolve, reject) => {
      axios({ method: 'get',url, headers })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },
  post(url = null, data = null, headers = {}) {
    return new Promise((resolve, reject) => {
      axios({ method: 'post', url, data, headers })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
}

export default serve
