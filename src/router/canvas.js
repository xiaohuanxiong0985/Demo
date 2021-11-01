const View = () => import('@/views/index');
export default [
  { path: '/canvas',
    component: View,
    children: [
      { path: 'demo1', component: () => import('@/views/canvas/demo1/demo1.vue'), meta: { title: 'canvas动画' } },
      { path: 'demo2', component: () => import('@/views/canvas/demo2.vue'), meta: { title: '根据图片改变背景色' } },
      { path: 'demo3', component: () => import('@/views/canvas/demo3/demo3.vue'), meta: { title: 'canvas绘制仪表盘' } }
    ]
  }
];
