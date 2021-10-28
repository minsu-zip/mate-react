import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import AntButton from '@AntDesign/AntButton'
import './index.css'
import PutMyPw from '@api/PutMyPw'
import PutMyInformation from '@api/PutMyInformation'
import styled from '@emotion/styled'
import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: skyblue;
  background-image: url('${(props) => props.src}');
  background-size: 500px;
  background-repeat: no-repeat;
`

const Div = styled.div`
  margin: 10px;
`

const modifyInformation = (values) => {
  const { userName, fullName, checkPw1, checkPw2 } = values

  if (checkPw1 !== checkPw2) {
    alert('비밀번호가 동일하지 않습니다')
    return
  } else {
    PutMyPw(checkPw1)
    PutMyInformation(fullName, userName)
  }
}

const HorizontalLoginForm = () => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({}) // To disable submit button at the beginning.
  const [imageGetProps, setimageGetProps] = useState('')

  useEffect(() => {
    console.log('=== useEffect first ===')
    const fetchArticles = async () => {
      const articleData = await GetAuthUser()
      setimageGetProps(articleData)
    }
    fetchArticles()
  }, [])

  const GetAuthUser = async (articleDataUrl) => {
    const BearerToken = `Bearer ${sessionStorage
      .getItem('userInformation')
      .replace(/\"/gi, '')}`

    return await axios({
      method: 'get',
      url: `${API_END_POINT}/auth-user`,
      headers: {
        Authorization: BearerToken,
      },
      body: {
        isCover: false,
        image: articleDataUrl,
      },
    })
      .then((response) => response.data)
      .then(({ image }) => {
        return image
      })
      .catch((error) => {
        console.log(error)
      })
  }

  GetAuthUser()

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values) => {
    modifyInformation(values)
  }

  const [imageUpload, setImageUpload] = useState()

  const PostUploadPhoto = async () => {
    const formData = new FormData()
    formData.append('isCover', false)
    formData.append('image', imageUpload)

    const BearerToken = `Bearer ${sessionStorage
      .getItem('userInformation')
      .replace(/\"/gi, '')}`

    await axios({
      method: 'post',
      url: `${API_END_POINT}/users/upload-photo`,
      headers: {
        Authorization: BearerToken,
      },
      data: formData,
    })
      .then((response) => {
        alert('이미지 업로드')
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
      <Form
        name="normal_login"
        className="mypage-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Div>
          <Image src={imageGetProps}></Image>
          <input
            type="file"
            className="imgInput"
            accept="image/*"
            name="file"
            onChange={onImgChange}
          ></input>
        </Div>

        <Div>
          <Button type="primary" onClick={PostUploadPhoto}>
            프로필 이미지 변경
          </Button>
        </Div>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="userName"
          />
        </Form.Item>
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="fullName"
          />
        </Form.Item>
        <Form.Item
          name="checkPw1"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호 변경"
          />
        </Form.Item>
        <Form.Item
          name="checkPw2"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호 변경 다시 입력하기"
          />
        </Form.Item>
        <Form.Item className="login-form-bottom">
          <AntButton
            text="계정 정보 변경"
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
          />
        </Form.Item>
      </Form>
    </>
  )
}

const MyInformation = () => {
  return <HorizontalLoginForm />
}

export default MyInformation
