import { request } from '@umijs/max';

/** 登陆接口模版 */
export async function login(
  params: {
    // GET
  },
  body: User.LoginVO,
  options?: { [key: string]: any },
) {
  return request<User.LoginResult>('/api/v1/queryUserList', {
    // method: 'GET',
    method: 'POST',
    params: {
      ...params,
    },
    body: {
      ...body,
    },
    ...(options || {}),
  });
}
