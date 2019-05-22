import Vue from 'vue'
import App from './App.vue'

/* 初始化样式 */ 
import 'Css/reset.styl'

/* 引入rem */
import 'Utils/rem'

/* 引入路由 */
import router from './router/index'

/* 引入vuex */
import store from 'Store/index';

/* 引入axios拦截器(请求前后的loading) */
import axios from "axios"

/* 引入loadingc组件 */
import {Indicator } from 'mint-ui'
 
/* 拦截器 */
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  Indicator.open({
    text:'客官请稍后',
    spinnerType:'fading-circle'
  })
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  Indicator.close()
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
