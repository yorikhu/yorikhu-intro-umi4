import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'inkroll',
    locale: false,
  },
  routes: routes,
  npmClient: 'yarn',
});
