import React, { useState, useCallback } from 'react'
import AntTextArea from '@components/AntDesign/AntTextArea'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import axios from 'axios'
import styled from '@emotion/styled'
import { getItem } from '@SessionStorage'
import { useLocation } from 'react-router'

const PostCreateContainer = styled.div`
  width: 70%;
`
const Div = styled.div`
  margin: 10px;
`

const PostCreatePage = () => {
  const location = useLocation()
  const history = useHistory()

  const postId = location?.search?.substr(1)
  const postState = location?.state

  const [textValue, setTextVaule] = useState(
    postState?.value ? postState?.value : '',
  )
  const [imageUpload, setImageUpload] = useState()
  const [submitting, setSubmitting] = useState(false)

  const [imgRemove, setImgRemove] = useState(false)

  const setPostCreate = async () => {
    const token = getItem('userInformation')
    const formData = new FormData()

    formData.append('image', imageUpload)
    formData.append('title', textValue)
    formData.append('channelId', '616a200d22996f0bc94f6db5')

    setSubmitting(true)

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

  const setPostUpdate = async () => {
    const token = getItem('userInformation')
    const formData = new FormData()

    if (imgRemove && postState.imagePublicId) {
      formData.append('imageToDeletePublicId', postState.imagePublicId)
    }

    if (imageUpload) {
      formData.append('image', imageUpload)
    }

    formData.append('postId', postId)
    formData.append('title', textValue)
    formData.append('channelId', '616a200d22996f0bc94f6db5')

    setSubmitting(true)

    await axios({
      method: 'put',
      url: `http://13.209.30.200/posts/update`,
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

  const handleOnClick = useCallback(() => history.push('/posts'), [history])

  const inputHandle = (e) => {
    setTextVaule(e.target.value)
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
        {postState ? (
          <Div>
            <Button type="danger" onClick={() => setImgRemove(true)}>
              기존 이미지 삭제
            </Button>
          </Div>
        ) : (
          ''
        )}
        <Div>
          <AntTextArea
            inputHandle={inputHandle}
            width="70%"
            value={textValue}
          ></AntTextArea>
        </Div>

        <Div>
          {postState ? (
            <Button
              htmlType="submit"
              loading={submitting}
              type="primary"
              onClick={setPostUpdate}
            >
              업데이트
            </Button>
          ) : (
            <Button
              htmlType="submit"
              loading={submitting}
              type="primary"
              onClick={setPostCreate}
            >
              생성
            </Button>
          )}
        </Div>
      </PostCreateContainer>
    </>
  )
}

export default PostCreatePage
