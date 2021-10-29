import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRoute from './router';
import cartRoute from './cart';
import videoRoute from './video';

Vue.use(VueRouter);

//  将路由拆分为各个小模块后合并引入
const routes = [
  ...homeRoute,
  ...cartRoute,
  ...videoRoute
];

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  // mode: 'history',
  routes
});

router.beforeEach((to, form, next) => {
  next();
});
//  cqgas-6003ffbc-ace9-4b8c-abca-ed89ae97809e
export default router;
