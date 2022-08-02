import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import BackHome from './components/BackHome';
import LoginForm from './components/LoginForm';
import styles from './index.less';

const Login: React.FC = () => {
  return (
    <div className={styles['login']}>
      {/* 利用 antd 受控表单逻辑（表单不展示） */}
      <div className={styles['antd-form-container']}>
        <h1>注册账号</h1>
        <Form name="signUp" autoComplete="off">
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
        <h1>账号登陆</h1>
        <Form name="signIn" autoComplete="off">
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
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
        <LoginForm />
      </div>
      {/* 返回主页 */}
      <div className={styles['back-home']}>
        <BackHome />
      </div>
    </div>
  );
};

export default Login;
