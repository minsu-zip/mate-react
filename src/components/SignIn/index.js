import React, { useState, useCallback, useEffect } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
import PostSignIn from '@api/PostSignIn'
import AntAlert from '@AntDesign/AntAlert'
import AntButton from '@AntDesign/AntButton'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

const LoginBtn = styled.button`
  width: 400px;
  padding: 10px 10px;
  background-color: #9bffdc;
  border-radius: 10px;
  margin-bottom: 20px;
`

const SignUpBtn = styled.button`
  width: 400px;
  padding: 10px 10px;
  background-color: #ffebaa;
  border-radius: 10px;
`

const Login = () => {
  const [form] = Form.useForm()

  const [SignInProblem, setIsSignInProblem] = useState('start')

  const onFinish = async (values) => {
    await message.loading('로그인 접속 중...', 1.5)
    await PostSignIn({ id: values.username, pw: values.password }).then(
      (res) => {
        if (res.isProblem) setIsSignInProblem('problem')
        else if (!res.isProblem && res.isAdmin)
          setIsSignInProblem('noProblemAdmin')
        else if (!res.isProblem && !res.isAdmin) setIsSignInProblem('noProblem')
      },
    )
    // handleOnClick()
  }

  useEffect(() => {
    if (SignInProblem === 'noProblem') handleOnClick()
    else if (SignInProblem === 'noProblemAdmin') {
      handleOnClickAdmin()
      sessionStorage.setItem('admin', true)
    }
  }, [SignInProblem])

  const history = useHistory()
  const handleOnClick = useCallback(() => history.push('/posts'), [history])
  const handleOnClickAdmin = useCallback(() => history.push('/admin'), [
    history,
  ])

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
        <img src="https://ifh.cc/g/4Wfpx7.png" />
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
        {SignInProblem === 'problem' ? (
          <AntAlert
            message={'Error'}
            description={'계정 정보가 틀립니다!'}
            type={'error'}
          ></AntAlert>
        ) : (
          ''
        )}

        <Form.Item className="login-form-bottom">
          <LoginBtn>로그인</LoginBtn>
          <br />
          <SignUpBtn
            onClick={() => {
              history.push('/register')
            }}
          >
            회원가입
          </SignUpBtn>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
