// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
import { HeaderProps } from '@ant-design/pro-layout';
import NotFound from './components/error/NotFound';
import PermissionDenied from './components/error/PermissionDenied';
import RightContentRender from './components/RightContentRender';
import { AuthType } from './constants';

export async function getInitialState(): Promise<User.LoginResult> {
  // TODO: 1.在 models 中获取用户的 token 2.判断登陆信息是否过期
  return { auth: AuthType.Tourist };
}

// 关于 layout 的配置
export const layout = () => {
  return {
    logo: false,
    menu: {
      locale: false,
    },
    layout: 'top',
    onMenuHeaderClick: null,
    // 自定义 403 页面
    noAccessible: <PermissionDenied />,
    // 自定义 404 页面
    notFound: <NotFound />,
    rightContentRender: (initialState: HeaderProps) => {
      return <RightContentRender initialState={initialState} />;
    },
  };
};
