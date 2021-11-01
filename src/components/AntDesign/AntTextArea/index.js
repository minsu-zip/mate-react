import { Input } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input

const AntTextArea = ({ inputHandle, width, value }) => {
  return (
    <>
      <TextArea
        rows={8}
        onChange={inputHandle}
        style={{ width: width }}
        value={value}
      />
    </>
  )
}

export default AntTextArea
