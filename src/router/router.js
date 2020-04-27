export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/user')
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
