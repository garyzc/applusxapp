/**
 * Created by zhuchen on 2018/4/11.
 */
import axios from 'axios'
import config from '../config/config'

const instance = axios.create({
  baseURL: config.api.url
  // timeout: 1000,
  // headers: {}
})

// window.axios.defaults.headers.common = {
//   'X-CSRF-TOKEN': window.Laravel.csrfToken,
//   'X-Requested-With': 'XMLHttpRequest'
// };

// instance.interceptors.request.use(function (request) {
//   var token, headers
//
//   token = sessionStorage.getItem('token')
//   headers = request.headers || (request.headers = {});
//
//   if ( token !== null && token !== 'undefined') {
//     headers['Authorization'] = token;
//   }
//
//   // if(window.Laravel.csrfToken != '') {
//   //   headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
//   //   headers['X-Requested-With'] = 'XMLHttpRequest';
//   // }
//   //request.headers['Access-Control-Request-Headers'] = 'Authorization'
//   request.headers = headers
//
//   return request
// })
//
// instance.interceptors.response.use(function (response) {
//
//   if (response.status && response.status == 401) {
//     sessionStorage.removeItem('token')
//   }
//   if (response.headers && response.headers.Authorization) {
//     //console.log(response.headers.Authorization)
//     sessionStorage.setItem('token', response.headers.Authorization)
//   }
//   if (response.entity && response.entity.token && response.entity.token.length > 10) {
//     sessionStorage.setItem('token', 'bearer ' + response.entity.token)
//   }
//
//   return response
// })



export default instance
