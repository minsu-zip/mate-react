import { Input } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input

const AntTextArea = ({ inputHandle, width }) => {
  const [textValue, setTextVaule] = useState('')

  const onChange = (e) => {
    setTextVaule(e.target.value)
    inputHandle(textValue)
  }

  return (
    <>
      <TextArea
        rows={8}
        value={textValue}
        onChange={onChange}
        style={{ width: width }}
      />
    </>
  )
}

export default AntTextArea
