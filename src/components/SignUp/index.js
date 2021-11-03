import { Form, Input, InputNumber, Button, message } from 'antd'
import './index.css'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import PostSignUp from '@api/PostSignUp'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { postRequest } from '@api/index.js'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const Register = () => {
  const onFinish = async ({ email, fullName, password }) => {
    await message
      .loading('회원 가입 등록 중...', 1.5)
      .then(() => message.success('회원가입 완료', 2.5))
    await postRequest('signup', {
      data: { email, fullName, password },
    })
    handleOnClick()
  }
  const history = useHistory()
  const handleOnClick = useCallback(() => history.push('/'), [history])

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="registerForm"
      >
        <img src="https://ifh.cc/g/4Wfpx7.png" />
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please input your FullName!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="FullName"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
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

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Register
