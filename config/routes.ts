export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    path: '/403',
    component: './Error/PermissionDenied',
  },
  {
    path: '/404',
    component: './Error/NotFound',
  },
  {
    path: '/500',
    component: './Error/ServerError',
  },
  {
    path: '*',
    redirect: '/404',
  },
];
