export const routes = [
  {
    name: '首页',
    path: '/',
    component: './Home',
  },
  {
    name: '登陆',
    path: '/login',
    component: './Login',
    headerRender: false,
    hideInMenu: true,
  },
  {
    path: '/403',
    component: '@/components/error/PermissionDenied',
  },
  {
    path: '/404',
    component: '@/components/error/NotFound',
  },
  {
    path: '/500',
    component: '@/components/error/ServerError',
  },
  {
    path: '*',
    redirect: '/404',
  },
];
