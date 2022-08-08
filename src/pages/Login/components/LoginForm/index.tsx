import { Button, FormInstance } from 'antd';
import classNames from 'classNames';
import { useState } from 'react';
import styles from './index.less';

type Props = {
  signInForm: FormInstance<any>;
  signUpForm: FormInstance<any>;
};

const LoginForm: React.FC<Props> = (props) => {
  const { signInForm, signUpForm } = props;
  console.log(signInForm, signUpForm);
  const [ifRightActive, setIfRightActive] = useState(false);
  return (
    <div className={styles['login-form']}>
      <div
        className={classNames(styles['container'], {
          [styles['right-panel-active']]: ifRightActive,
        })}
      >
        <div
          className={classNames(
            styles['form-container'],
            styles['sign-up-container'],
          )}
        >
          <div className={styles['form-body']}>
            <h1>创建账号</h1>
            <input type="text" placeholder="用户名" />
            <input type="email" placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <a>想多了解一下这里?</a>
            <Button>注册</Button>
          </div>
        </div>
        <div
          className={classNames(
            styles['form-container'],
            styles['sign-in-container'],
          )}
        >
          <div className={styles['form-body']}>
            <h1>登陆</h1>
            <input type="email" placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <a>忘记了你的密码?</a>
            <Button>登陆</Button>
          </div>
        </div>
        <div className={styles['overlay-container']}>
          <div className={styles['overlay']}>
            <div
              className={classNames(
                styles['overlay-panel'],
                styles['overlay-left'],
              )}
            >
              <h1>欢迎回来，朋友!</h1>
              <p>
                嘿！我们的老朋友，快来登陆页面填写你的用户信息，时间可不会等人呐
              </p>
              <Button
                onClick={() => {
                  setIfRightActive(false);
                }}
                className={styles['ghost']}
                id="signIn"
              >
                去登陆
              </Button>
            </div>
            <div
              className={classNames(
                styles['overlay-panel'],
                styles['overlay-right'],
              )}
            >
              <h1>你好，朋友!</h1>
              <p>
                哈喽！没有账号就别瞅了，快点来注册页面吧，填些简单的信息，就能加入我们
              </p>
              <Button
                onClick={() => {
                  setIfRightActive(true);
                }}
                className={styles['ghost']}
                id="signUp"
              >
                去注册
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
