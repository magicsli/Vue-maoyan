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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
