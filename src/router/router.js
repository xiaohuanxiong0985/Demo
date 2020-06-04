export default [
  {
    path: '/',
    component: () => import('../views/Countdown/index')
  },
  {
    path: '/user',
    component: () => import('../views/home')
  },
  {
    path: '/view',
    component: () => import('../views/view')
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/form',
    component: () => import('../views/form/form')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
];
