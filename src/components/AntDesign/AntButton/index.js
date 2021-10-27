import { Button } from 'antd'
import React from 'react'
const AntButton = ({
  text,
  type,
  size = 'default',
  className = '',
  htmlType = '',
  onClick = '',
}) => {
  return (
    <>
      <Button
        type={type}
        size={size}
        className={className}
        htmlType={htmlType}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  )
}

export default AntButton
