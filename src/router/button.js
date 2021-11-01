const View = () => import('@/views/index');
export default [
  { path: '/button',
    component: View,
    children: [
      { path: 'demo1', component: () => import('@/views/button/demo1'), meta: { title: '霓虹灯按钮1' } },
      { path: 'demo2', component: () => import('@/views/button/demo2'), meta: { title: '霓虹灯按钮2' } },
      { path: 'demo3', component: () => import('@/views/button/demo3'), meta: { title: '拟态按钮' } }
    ]
  }
];
