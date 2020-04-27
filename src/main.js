import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'amfe-flexible/index';
import './assets/css/common.css';
// import './assets/icon/iconfont.css';
import './assets/scss/index.scss';
if (process.env.NODE_ENV !== 'production') require('../mock');
//  路由重复
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
