import { Button } from 'antd'
import React from 'react'
const AntButton = ({
  text,
  type,
  size = 'default',
  className = '',
  htmlType = '',
}) => {
  return (
    <>
      <Button type={type} size={size} className={className} htmlType={htmlType}>
        {text}
      </Button>
    </>
  )
}

export default AntButton
