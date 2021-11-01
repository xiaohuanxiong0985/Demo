const View = () => import('@/views/index');
export default [
  { path: '/demo',
    component: View,
    children: [
      { path: 'demo1', component: () => import('@/views/Demo/demo1'), meta: { title: '抽奖' } },
      { path: 'demo2', component: () => import('@/views/Demo/demo2'), meta: { title: '市区选择' } },
      { path: 'demo3', component: () => import('@/views/Demo/demo3'), meta: { title: '登录' } },
      { path: 'demo4', component: () => import('@/views/Demo/demo4'), meta: { title: '表单' } },
      { path: 'demo5', component: () => import('@/views/Demo/demo5'), meta: { title: '表格' } },
      { path: 'demo6', component: () => import('@/views/Demo/demo6'), meta: { title: '仪表盘' } },
      { path: 'demo7', component: () => import('@/views/Demo/demo7'), meta: { title: '订阅模式' } }
    ]
  }
];
