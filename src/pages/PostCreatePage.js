import React, { useState, useCallback } from 'react'
import AntTextArea from '@components/AntDesign/AntTextArea'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import axios from 'axios'
import styled from '@emotion/styled'
import { getItem } from '@SessionStorage'
import { useParams } from 'react-router-dom'

const PostCreateContainer = styled.div`
  width: 70%;
`
const Div = styled.div`
  margin: 10px;
`

const PostCreatePage = () => {
  const [textValue, setTextVaule] = useState('')
  const [imageUpload, setImageUpload] = useState()
  const [submitting, setSubmitting] = useState(false)

  const inputHandle = (e) => {
    setTextVaule(e.target.value)
  }

  const setPostCreate = async () => {
    setSubmitting(true)
    const token = getItem('userInformation')

    const formData = new FormData()
    formData.append('image', imageUpload)
    formData.append('title', textValue)
    formData.append('channelId', '616a200d22996f0bc94f6db5')

    await axios({
      method: 'post',
      url: `http://13.209.30.200/posts/create`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: formData,
    }).catch((error) => {
      console.log(error)
    })

    setSubmitting(false)
    setTextVaule('')
    handleOnClick()
  }

  const history = useHistory()
  const handleOnClick = useCallback(() => history.push('/posts'), [history])

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
          <Button
            htmlType="submit"
            loading={submitting}
            type="primary"
            onClick={setPostCreate}
          >
            생성
          </Button>
        </Div>
      </PostCreateContainer>
    </>
  )
}

export default PostCreatePage
