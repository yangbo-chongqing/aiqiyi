import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
// // 2：配置访问服务器基础路径
// axios.defaults.baseURL = "http://lsybbe.applinzi.com/"
// // 3：配置保存session数据
// axios.defaults.withCredentials = true
//注册axios
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
