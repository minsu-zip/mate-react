import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import AntButton from '@AntDesign/AntButton'
import './index.css'
import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

const modifyInformation = (values) => {
  const { userName, fullName, checkPw1, checkPw2 } = values

  if (checkPw1 !== checkPw2) {
    alert('동일한 비밀번호가 입력되지 않았습니다')
  } else {
    PutMyPw(checkPw1)
    PutMyInformation(fullName, userName)
  }
}

const PutMyInformation = async (fullName, username) => {
  const BearerToken = `Bearer ${sessionStorage
    .getItem('userInformation')
    .replace(/\"/gi, '')}`

  try {
    await axios
      .put(
        `${API_END_POINT}/settings/update-user`,
        {
          fullName,
          username,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: BearerToken,
          },
        },
      )
      .then((res) => res.data)
      .then((data) => alert(data))
  } catch (error) {
    console.log(error)
  }
}

const PutMyPw = async (pw) => {
  const BearerToken = `Bearer ${sessionStorage
    .getItem('userInformation')
    .replace(/\"/gi, '')}`

  try {
    await axios
      .put(
        `${API_END_POINT}/settings/update-password`,
        {
          password: pw,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: BearerToken,
          },
        },
      )
      .then((res) => res.data)
      .then((data) => alert(data))
  } catch (error) {
    console.log(error)
  }
}

const HorizontalLoginForm = () => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({}) // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values) => {
    modifyInformation(values)
  }

  return (
    <>
      <Form
        name="normal_login"
        className="mypage-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="userName"
          />
        </Form.Item>
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="fullName"
          />
        </Form.Item>
        <Form.Item
          name="checkPw1"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호 변경"
          />
        </Form.Item>
        <Form.Item
          name="checkPw2"
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
            placeholder="비밀번호 변경 다시 입력하기"
          />
        </Form.Item>
        <Form.Item className="login-form-bottom">
          <AntButton
            text="수정 하기"
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
          />
        </Form.Item>
      </Form>
    </>
  )
}

const MyInformation = () => {
  return <HorizontalLoginForm />
}

export default MyInformation
