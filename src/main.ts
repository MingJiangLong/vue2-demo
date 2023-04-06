import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../src/store/index';

// 取消Vue的警告
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
