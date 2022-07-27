// 全局初始化数据配置，用于 Layout 用户信息和权限初始化

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'inkroll' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout: 'top'
  };
};
