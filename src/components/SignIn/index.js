import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
import PostSignIn from '@api/PostSignIn'
import AntAlert from '@AntDesign/AntAlert'
import AntButton from '@AntDesign/AntButton'

const Login = () => {
  const [form] = Form.useForm()

  const [isSignInProblem, setIsSignInProblem] = useState(false)

  const onFinish = (values) => {
    PostSignIn({ id: values.username, pw: values.password }).then((res) => {
      setIsSignInProblem(res)
    })
    console.log('Finish:', values)
  }

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {isSignInProblem ? (
          <AntAlert
            message={'Error'}
            description={'계정 정보가 틀립니다!'}
            type={'error'}
          ></AntAlert>
        ) : (
          ''
        )}

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <AntButton
            text="Log in"
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
          />
          Or <a href="/register">signUp now!</a>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
