import Footer from '@/components/Footer';
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import BackHome from './components/BackHome';
import LoginForm from './components/LoginForm';
import styles from './index.less';

const Login: React.FC = () => {
  const [signInForm] = Form.useForm();
  const [signUpForm] = Form.useForm();

  type formDataType = {
    username?: string;
    email?: string;
    password?: string;
  };

  const validateNotice = (values: formDataType) => {
    let key: keyof formDataType;
    let ifNeedNotice = false;
    for (key in values) {
      if (!values[key]) ifNeedNotice = true;
    }
    if (ifNeedNotice) message.error('哎呀！所有信息都要填写呢 ฅʕ•̫͡•ʔฅ ~');
    return ifNeedNotice;
  };

  const signInFinish = (values: formDataType) => {
    if (validateNotice(values)) return;
    console.log(values);
  };

  const signUpFinish = (values: formDataType) => {
    if (validateNotice(values)) return;
    console.log(values);
  };

  return (
    <div className={styles['login']}>
      {/* 利用 antd 受控表单逻辑（表单不展示） */}
      <div className={styles['antd-form-container']}>
        <h1>注册账号</h1>
        <Form
          form={signUpForm}
          onFinish={signUpFinish}
          name="signUp"
          autoComplete="off"
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
        <h1>账号登陆</h1>
        <Form
          form={signInForm}
          onFinish={signInFinish}
          name="signIn"
          autoComplete="off"
        >
          <Form.Item label="邮箱" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* 表单主体 */}
      <div className={styles['main-form-container']}>
        <LoginForm signInForm={signInForm} signUpForm={signUpForm} />
      </div>
      {/* 返回主页 */}
      <div className={styles['back-home']}>
        <BackHome />
      </div>
      <Footer type="login" />
    </div>
  );
};

export default Login;
