import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
} from '@ant-design/icons'
import { Form, Input, Button, Tree } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import AntButton from '@components/AntDesign/AntButton'

const onChangeFullName = (e) => {
  // const get = JSON.parse(localStorage.getItem('MyInformation'))
  // let add = e.nativeEvent.data
  // console.log(get)
  // if (!get) {
  //   add = get.fullName + e.nativeEvent.data
  // }
  // localStorage.setItem(
  //   'MyInformation',
  //   JSON.stringify({
  //     ...get,
  //     fullName: add,
  //   }),
  // )
  // console.log(e.nativeEvent.data)
}
const onChangeUserName = (e) => {
  const get = JSON.parse(localStorage.getItem('MyInformation'))
  let add = e.nativeEvent.data
  // if (get.userName) add = get.userName + e.nativeEvent.data
  // localStorage.setItem(
  //   'MyInformation',
  //   JSON.stringify({
  //     ...get,
  //     userName: add,
  //   }),
  // )
  // console.log(e.nativeEvent.data)
}
const onChangeFirstCheckPw = (e) => {
  const get = JSON.parse(localStorage.getItem('MyInformation'))
  let add = e.nativeEvent.data
  // if (get.FirstCheckPw) add = get.FirstCheckPw + e.nativeEvent.data
  // localStorage.setItem(
  //   'MyInformation',
  //   JSON.stringify({
  //     ...get,
  //     FirstCheckPw: add,
  //   }),
  // )
  // console.log(e.nativeEvent.data)
}
const onChangeSecondCheckPw = (e) => {
  const get = JSON.parse(localStorage.getItem('MyInformation'))
  let add = e.nativeEvent.data
  // if (get.SecondCheckPw) add = get.SecondCheckPw + e.nativeEvent.data
  // localStorage.setItem(
  //   'MyInformation',
  //   JSON.stringify({
  //     ...get,
  //     SecondCheckPw: add,
  //   }),
  // )
  // console.log(e.nativeEvent.data)
}
const changeInformation = (e) => {}

const treeData = [
  {
    title: 'fullName 변경',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: (
          <Form
            name="normal_login"
            className="MyInformation-form"
            initialValues={{
              remember: true,
            }}
          >
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
                prefix={
                  <UserOutlined className="MyInformation-form-item-icon" />
                }
                type="String"
                placeholder="새로운 fullName"
                onChange={onChangeFullName}
              />
            </Form.Item>
          </Form>
        ),
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'userName 변경',
    key: '0-1',
    icon: <SmileOutlined />,
    children: [
      {
        title: (
          <Form
            name="normal_login"
            className="MyInformation-form"
            initialValues={{
              remember: true,
            }}
          >
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
                prefix={
                  <UserOutlined className="MyInformation-form-item-icon" />
                }
                type="String"
                placeholder="새로운 userName"
                onChange={onChangeUserName}
              />
            </Form.Item>
          </Form>
        ),
        key: '0-1-0',
      },
    ],
  },
  {
    title: '비밀번호 변경',
    key: '0-2',
    icon: <SmileOutlined />,
    children: [
      {
        title: (
          <Form
            name="normal_login"
            className="MyInformation-form"
            initialValues={{
              remember: true,
            }}
          >
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
                prefix={
                  <LockOutlined className="MyInformation-form-item-icon" />
                }
                type="password"
                placeholder="새로운 Password"
                onChange={onChangeFirstCheckPw}
              />
              <br />
              <Input
                prefix={
                  <LockOutlined className="MyInformation-form-item-icon" />
                }
                type="password"
                placeholder="새로운 Password 다시입력"
                onChange={onChangeSecondCheckPw}
              />
            </Form.Item>
          </Form>
        ),
        key: '0-2-0',
      },
    ],
  },
]

const MyInformation = () => {
  return (
    <>
      <Tree
        showIcon
        defaultExpandedKeys={['0-0-0']}
        defaultSelectedKeys={['0-0-0']}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
      />
      <AntButton
        text="제출하기"
        type="primary"
        size="default"
        onClick={changeInformation}
      />
    </>
  )
}

export default MyInformation
