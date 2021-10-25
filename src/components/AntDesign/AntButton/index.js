import { Button } from 'antd'
import React from 'react'
const AntButton = ({
  text,
  type,
  shape,
  size = 'default',
  className = '',
  htmlType = '',
}) => {
  return (
    <>
      <Button
        type={type}
        shape={shape}
        size={size}
        className={className}
        htmlType={htmlType}
      >
        {text}
      </Button>
    </>
  )
}

export default AntButton
