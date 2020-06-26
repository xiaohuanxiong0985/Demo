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
    path: '/element-table-expand',
    component: () => import('../views/element-table-expand')
  },
  {
    path: '/loading',
    component: () => import('../views/loading/index'),
    children: [
      {
        path: 'demo1',
        component: () => import('../views/loading/demo1')
      },
      {
        path: 'demo2',
        component: () => import('../views/loading/demo2')
      },
      {
        path: 'demo3',
        component: () => import('../views/loading/demo3')
      },
      {
        path: 'demo4',
        component: () => import('../views/loading/demo4')
      },
      {
        path: 'demo5',
        component: () => import('../views/loading/demo5')
      },
    ]
  },
  {
    path: '/background',
    component: () => import('../views/background/index'),
    children: [
      {
        path: 'demo1',
        component: () => import('../views/background/demo1'),
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
];
