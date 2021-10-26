import React, { useState } from 'react'
import AntTextArea from '@components/AntDesign/AntTextArea'

import { Button } from 'antd'
import axios from 'axios'
import styled from '@emotion/styled'

const PostCreateContainer = styled.div`
  width: 80%;
  display: inline-block;
`
const Div = styled.div`
  margin: 10px;
`

const PostCreatePage = () => {
  const [textValue, setTextVaule] = useState('')
  const [imageUpload, setImageUpload] = useState()

  const inputHandle = (e) => {
    setTextVaule(e)
    console.log(textValue)
  }

  const setPostCreate = async () => {
    const formData = new FormData()
    formData.append('image', imageUpload)
    formData.append('title', textValue)
    formData.append('channelId', '616a200d22996f0bc94f6db5')

    await axios({
      method: 'post',
      url: `http://13.209.30.200/posts/create`,
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxNzE4NjBhYjYzN2JjMTExOTdkZThhOCIsImVtYWlsIjoia2h3OTcwNDIxQGtha2FvLmNvbSJ9LCJpYXQiOjE2MzUxNTAwODZ9.DDATyzYB8UCtRgQkTH_Ob2c35bzMHIcidDqsZmh9jRk',
      },
      data: formData,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onImgChange = (e) => {
    e.preventDefault()
    setImageUpload(e.target.files[0])
  }

  return (
    <>
      <PostCreateContainer>
        <Div>
          <input
            type="file"
            className="imgInput"
            accept="image/*"
            name="file"
            onChange={onImgChange}
          ></input>
        </Div>
        <Div>
          <AntTextArea inputHandle={inputHandle} width="70%"></AntTextArea>
        </Div>

        <Div>
          <Button type="primary" onClick={setPostCreate}>
            생성
          </Button>
        </Div>
      </PostCreateContainer>
    </>
  )
}

export default PostCreatePage
