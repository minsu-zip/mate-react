import { Alert } from 'antd'
import React from 'react'
const AntAlert = ({ message, description, type }) => {
  return (
    <>
      <Alert message={message} description={description} type={type} showIcon />
    </>
  )
}

export default AntAlert
