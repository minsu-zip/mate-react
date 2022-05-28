import React, { useState, useCallback } from 'react'
import AntTextArea from '@components/AntDesign/AntTextArea'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import styled from '@emotion/styled'
import { useLocation } from 'react-router'
import { postCreate, postUpdate } from '@apis/api/post'

const PostCreateContainer = styled.div`
  width: 60%;
  margin-top: 20px;
`
const Div = styled.div`
  margin: 10px;
`

const PostCreatePage = React.memo(() => {
  const location = useLocation()
  const history = useHistory()

  const postId = location?.search?.substr(1)
  const postState = location?.state
  const check = postState.updateCheck

  const channelId = postState.channelId

  const [textValue, setTextVaule] = useState(
    postState?.value ? postState?.value : '',
  )
  const [imageUpload, setImageUpload] = useState()
  const [submitting, setSubmitting] = useState(false)
  const [imgRemove, setImgRemove] = useState(false)

  const setPostCreate = () => {
    const formData = new FormData()
    formData.append('image', imageUpload)
    formData.append('title', textValue)
    formData.append('channelId', channelId)

    setSubmitting(true)
    ;(async () => {
      await postCreate(formData)
      setSubmitting(false)
      setTextVaule('')
      handleOnClick()
    })()
  }

  const setPostUpdate = () => {
    const formData = new FormData()
    if (imgRemove && postState.imagePublicId) {
      formData.append('imageToDeletePublicId', postState.imagePublicId)
    }

    if (imageUpload) {
      formData.append('image', imageUpload)
    }
    formData.append('postId', postId)
    formData.append('title', textValue)
    formData.append('channelId', channelId)

    setSubmitting(true)
    ;(async () => {
      await postUpdate(formData)
      setSubmitting(false)
      setTextVaule('')
      handleOnClick()
    })()
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
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
          {check ? (
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
              width="100%"
              value={textValue}
            ></AntTextArea>
          </Div>

          <Div>
            {check ? (
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
      </div>
    </>
  )
})

export default PostCreatePage
