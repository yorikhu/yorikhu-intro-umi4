export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
    access: 'canSeeUser',
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
