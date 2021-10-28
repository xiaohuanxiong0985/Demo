export default [
  {
    path: '/',
    component: () => import('../views/home')
  },
  {
    path: '/user',
    component: () => import('../views/user')
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
    component: () => import('../views/index'),
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
      }
    ]
  },
  {
    path: '/background',
    component: () => import('../views/index'),
    children: [
      {
        path: 'demo1',
        component: () => import('../views/background/demo1')
      },
      {
        path: 'demo2',
        component: () => import('../views/background/demo2')
      },
      {
        path: 'demo3',
        component: () => import('../views/background/demo3')
      },
      {
        path: 'demo4',
        component: () => import('../views/background/demo4')
      }
    ]
  },
  {
    path: '/button',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/button/demo1') },
      { path: 'demo2', component: () => import('../views/button/demo2') }
    ]
  },
  {
    path: '/patterns',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/design_patterns/demo1/demo1.vue') }
    ]
  },
  {
    path: '/canvas',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/canvas/demo1/demo1.vue') }
    ]
  },
  {
    path: '/layout',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/layout/demo1/index.vue') }
    ]
  },
  {
    path: '/grid',
    component: () => import('../views/grid'),
    meta: { title: 'grid布局' }
  },
  {
    path: '/bilibili',
    component: () => import('@/views/bilibili/autumn'),
    meta: { title: '哔哩哔哩头部动画' }
  },
  {
    path: '/mimicry',
    component: () => import('@/views/bilibili/mimicry'),
    meta: { title: '拟态按钮' }
  },
  {
    path: '/dashboard',
    component: () => import('@/views/bilibili/dashboard.vue'),
    meta: { title: 'canvas绘制仪表盘' }
  },
  //  socket测试
  {
    path: '/socket',
    component: () => import('../views/socket/index')
  },
  {
    path: '/test',
    component: () => import('../views/test'),
    children: [
      {
        path: 'one',
        component: () => import('../views/test/test1')
      },
      {
        path: 'two',
        component: () => import('../views/test/test')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
];
