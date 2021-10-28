const View = () => import('@/views/index');
export default [
  { path: '/cart',
    component: View,
    children: [
      { path: 'demo1', component: () => import('@/views/cart/demo1') }
    ]
  }
];
