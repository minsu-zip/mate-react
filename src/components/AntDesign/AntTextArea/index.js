import { Input } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input

const AntTextArea = ({ inputHandle, width }) => {
  return (
    <>
      <TextArea rows={8} onChange={inputHandle} style={{ width: width }} />
    </>
  )
}

export default AntTextArea
