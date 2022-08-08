import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Yorikhu',
    locale: false,
  },
  routes: routes,
  npmClient: 'yarn',
});
