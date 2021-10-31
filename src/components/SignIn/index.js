import React, { useState, useCallback } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
import PostSignIn from '@api/PostSignIn'
import AntAlert from '@AntDesign/AntAlert'
import AntButton from '@AntDesign/AntButton'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const [form] = Form.useForm()

  const [isSignInProblem, setIsSignInProblem] = useState(false)

  const onFinish = async (values) => {
    await PostSignIn({ id: values.username, pw: values.password }).then(
      (res) => {
        setIsSignInProblem(res)
      },
    )
    if (isSignInProblem) handleOnClick()
  }

  const history = useHistory()
  const handleOnClick = useCallback(() => history.push('/posts'), [history])

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
        <div class="main_title">𝓶𝓪𝓽𝓮</div>
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
        </Form.Item>

        <Form.Item className="login-form-bottom">
          <AntButton
            text="Log in"
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
          />
          계정이 없으신가요?{' '}
          <a href="/register" className="signup-form-href">
            가입하기
          </a>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
