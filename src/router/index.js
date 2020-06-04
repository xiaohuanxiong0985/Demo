import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  routes
});

router.beforeEach((to, form, next) => {
  next();
});
//  cqgas-6003ffbc-ace9-4b8c-abca-ed89ae97809e
export default router;
