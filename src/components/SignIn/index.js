import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'

const API_END_POINT = 'http://13.209.30.200'
async function Post_Login({ id, pw }) {
  console.log(id, pw)
  let isProblem
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    sessionStorage.setItem('userInformation', JSON.stringify(response.data))
    alert('정상작동')
    isProblem = false
    return isProblem
  } catch (error) {
    isProblem = true
    return isProblem
  }
}

const Login = () => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({}) // To disable submit button at the beginning.
  const [isSignInProblem, setIsSignInProblem] = useState(false)

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values) => {
    Post_Login({ id: values.username, pw: values.password }).then((res) => {
      setIsSignInProblem(res)
    })
    console.log('Finish:', values)
  }

  return (
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
        <Alert
          message="Error"
          description="이메일 혹은 비밀번호를 잘못 입력했습니다"
          type="error"
          showIcon
        />
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  )
}

export default Login
