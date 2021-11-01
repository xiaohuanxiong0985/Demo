export default [
  {
    path: '/',
    component: () => import('../views/home')
  },
  {
    path: '/background',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/background/demo1'), meth: { title: '动态渐变背景' } },
      { path: 'demo2', component: () => import('../views/background/demo2'), meth: { title: '日环食' } },
      { path: 'demo3', component: () => import('../views/background/demo3'), meth: { title: '视差滚动' } },
      { path: 'demo4', component: () => import('../views/background/demo4'), meth: { title: '视差滚动-已失效' } },
      { path: 'demo5', component: () => import('@/views/background/demo5'), meth: { title: '视差移动' } }
    ]
  },
  {
    path: '/loading',
    component: () => import('../views/index'),
    children: [
      { path: 'demo1', component: () => import('../views/loading/demo1') },
      { path: 'demo2', component: () => import('../views/loading/demo2') },
      { path: 'demo3', component: () => import('../views/loading/demo3') },
      { path: 'demo4', component: () => import('../views/loading/demo4') },
      { path: 'demo5', component: () => import('../views/loading/demo5') }
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
  //  socket测试
  {
    path: '/socket',
    component: () => import('../views/socket/index')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
];
