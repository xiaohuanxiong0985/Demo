const View = () => import('@/views/index');
export default [
  { path: '/video',
    component: View,
    children: [
      { path: 'demo1', component: () => import('@/views/video/demo1') }
    ]
  }
];
