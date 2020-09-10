import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './style.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$store = store;

new Vue({
  el: '#app',
  store,
  router, //可以简写router
  render: c => c(App),
})