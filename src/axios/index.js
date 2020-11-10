import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
}, () => { })

// 响应拦截器
axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return err
})

/**
 * @param {string} method 请求方式
 * @param {string} url url
 * @param {*} data 默认post参数
 * @param {*} headers
 * @param {*} withCredentials 携带cookie
 */

export default {

  axios(method = 'get', baseURL = null, url = null, data = null, headers = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        baseURL,
        timeout: 36000,
        data,
        headers
      }).then(result => resolve(result))
        .catch(err => reject(err))
    })
  }
}
