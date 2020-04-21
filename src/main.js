import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';
import 'lib-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false;

// console.log('环境变量', process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
