declare namespace User {
  /** 登陆信息入参 */
  type LoginVO = {
    userEmail: string;
    keywords: string;
  };

  /** 登陆返回值 */
  type LoginResult = {
    auth: string;
  };
}
