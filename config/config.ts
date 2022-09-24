import { defineConfig } from '@umijs/max';
import { chainWebpack } from './gzip.config';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '尤里克知识库',
    locale: false,
  },
  routes: routes,
  npmClient: 'yarn',
  chainWebpack: chainWebpack,
});
