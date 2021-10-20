import React, { useState, useEffect } from 'react'
import {
  useUsersState,
  useUsersDispatch,
  Post_Login,
} from '../context/contextLogin.js'
import { Form, Input, Button, Checkbox } from 'antd'

function LoginForm() {
  const [userId, setUserId] = useState(null)
  const state = useUsersState()
  const dispatch = useUsersDispatch()
  const { data: users, loading, error } = state.users

  useEffect(() => {
    if (state.user.data) {
      console.log('로그인 성공')
    } else {
      console.log('로그인 실패')
    }
  }, [state])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>

  console.log(state)

  const onFinish = (values) => {
    Post_Login(values, dispatch)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm

// import React from 'react'
// import LoginForm from './components/LoginForm/index.js'
// import { UsersProvider } from './components/context/contextLogin'

// function App() {
//   return (
//     <UsersProvider>
//       <LoginForm />
//     </UsersProvider>
//   )
// }

// export default App

// App.js에서 이렇게 동작시 사용가능
