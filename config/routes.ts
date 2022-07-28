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
    name: '登陆',
    path: '/login',
    component: './Login',
    headerRender: false,
    hideInMenu: true,
  },
  {
    name: '错误页面',
    path: '/error',
    routes: [
      {
        name: '403',
        path: '/error/403',
        component: './error/PermissionDenied',
      },
      {
        name: '404',
        path: '/error/404',
        component: './error/NotFound',
      },
      {
        name: '500',
        path: '/error/500',
        component: './error/ServerError',
      },
    ],
  },
  {
    path: '/403',
    component: './error/PermissionDenied',
  },
  {
    path: '/404',
    component: './error/NotFound',
  },
  {
    path: '/500',
    component: './error/ServerError',
  },
  {
    path: '*',
    redirect: '/404',
  },
];
