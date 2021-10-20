import React from 'react'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Search } = Input
const Button = () => {
  return (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />

      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
    </>
  )
}

export default Button
