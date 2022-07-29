import { AuthType } from './constants';

export default (initialState: User.LoginResult) => {
  const authLicense = {
    canSeeAdmin: false,
    canSeeManager: false,
    canSeeUser: false,
    canSeeTourist: true,
  };
  switch (initialState.auth) {
    case AuthType.Admin:
      authLicense.canSeeAdmin = true;
    case AuthType.Manager:
      authLicense.canSeeManager = true;
    case AuthType.User:
      authLicense.canSeeUser = true;

    default:
      console.warn('您还没有登陆哦! ฅʕ•̫͡•ʔฅ');
  }
  return {
    ...authLicense,
  };
};
