import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Menu,
  Card,
  Avatar,
  Col,
  Row,
  message,
} from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import AntButton from '@AntDesign/AntButton'
import './index.css'
import PutMyPw from '@api/PutMyPw'
import PutMyInformation from '@api/PutMyInformation'
import styled from '@emotion/styled'
import axios from 'axios'
import GetAuthUser from '@api/GetAuthUser'
import PostUploadPhoto from '@api/PostUploadPhoto'
import { getRequest, postRequest, putRequest } from '@api/index.js'
import { getItem } from '@SessionStorage'

const ProfileImageChangeBtn = styled.button`
  width: 200px;
  padding: 10px 10px;
  background-color: #9bffdc;
  border-radius: 10px;
  margin-bottom: 20px;
`

const InformationChangeBtn = styled.button`
  width: 200px;
  padding: 10px 10px;
  background-color: #ffebaa;
  border-radius: 10px;
`

const { Meta } = Card

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: end;
  align-items: end;
  justify-items: center;
  align-items: center;
`

const GetPostAuther = async (id) => {
  return await axios({
    method: 'get',
    url: `${API_END_POINT}/posts/author/${id}`,
  })
    .then((response) => response.data)
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

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

const ProfileContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
`

const SettingContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
`

const Div = styled.div`
  margin: 10px;
`

const modifyInformation = (values) => {
  const { userName, fullName, checkPw1, checkPw2 } = values
  const BearerToken = `Bearer ${getItem('userInformation')}`
  if (checkPw1 !== checkPw2) {
    alert('비밀번호가 동일하지 않습니다')
    return
  } else {
    message
      .loading('개인정보 수정 중...', 1.5)
      .then(() => message.success('수정 완료', 2.5))
    putRequest('settings/update-password', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: BearerToken,
      },
      data: {
        password: checkPw1,
      },
    })
    console.log(checkPw1, '!!!!!!!!!!!!!!!!!!!!')
    // putRequest(fullName, userName)
    putRequest('settings/update-user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: BearerToken,
      },
      data: {
        fullName,
        username: userName,
      },
    })
  }
}

const HorizontalLoginForm = () => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({}) // To disable submit button at the beginning.
  const [imageGetProps, setimageGetProps] = useState('')
  const [isProfileShow, setIsProfileShow] = useState(false)
  const [isSettingShow, setIsSettingShow] = useState(true)
  const [postDataState, setPostDataState] = useState([])

  useEffect(() => {
    console.log('=== useEffect first ===')
    const fetchArticles = async () => {
      const BearerToken = `Bearer ${getItem('userInformation')}`
      const { image, _id } = await getRequest('auth-user', {
        headers: {
          Authorization: BearerToken,
        },
      })
      const postData = await GetPostAuther(_id)
      console.log(image)
      setPostDataState(postData)
      setimageGetProps(image)
      console.log(postData)
    }
    fetchArticles()
    console.log(postDataState)
  }, [])

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values) => {
    modifyInformation(values)
  }

  const [imageUpload, setImageUpload] = useState()

  const PostUploadPhotoHandler = () => {
    const formData = new FormData()
    formData.append('isCover', false)
    formData.append('image', imageUpload)
    const BearerToken = `Bearer ${getItem('userInformation')}`

    postRequest('users/upload-photo', {
      headers: {
        Authorization: BearerToken,
      },
      data: formData,
    })
    message
      .loading('사진 업로드 중...', 1.5)
      .then(() => message.success('사진 업로드 완료', 2.5))
  }

  const onImgChange = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    reader.onload = function (event) {
      setimageGetProps(event.target.result)
    }

    reader.readAsDataURL(e.target.files[0])
    setImageUpload(e.target.files[0])
  }

  const headerName = {
    titleName: ['설정', '작성한 글'],
    keyName: ['setting', 'profile'],
  }

  const clickHeaderHandler = ({ key }) => {
    if (headerName.keyName[key] === 'profile') {
      setIsSettingShow(false)
      setIsProfileShow(true)
    } else if (headerName.keyName[key] === 'setting') {
      setIsSettingShow(true)
      setIsProfileShow(false)
    }
  }
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {new Array(2).fill(null).map((_, index) => {
          const key = index
          return (
            <Menu.Item
              key={key}
              onClick={clickHeaderHandler}
            >{`${headerName.titleName[key]}`}</Menu.Item>
          )
        })}
      </Menu>

      <ProfileContainer display={isProfileShow} className="profileContainer">
        <CardGrid>
          {postDataState.length !== 0
            ? postDataState.map(({ title, image, channel }) => {
                return (
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <Image
                        alt="example"
                        src={
                          image ? image : 'https://via.placeholder.com/300.png'
                        }
                        width="200px"
                        height="200px"
                      />
                    }
                  >
                    <Meta title={title} description={channel.name} />
                  </Card>
                )
              })
            : ''}
        </CardGrid>
      </ProfileContainer>

      <SettingContainer display={isSettingShow}>
        <Form
          name="normal_login"
          className="mypage-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Div>
            <Image
              src={
                imageGetProps ? imageGetProps : 'https://ifh.cc/g/4Wfpx7.png'
              }
            ></Image>
            <input
              type="file"
              className="imgInput"
              accept="image/*"
              name="file"
              onChange={onImgChange}
            ></input>
          </Div>

          <Div>
            <ProfileImageChangeBtn onClick={PostUploadPhotoHandler}>
              프로필 이미지 변경
            </ProfileImageChangeBtn>
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
            <InformationChangeBtn>계정 정보 변경</InformationChangeBtn>
          </Form.Item>
        </Form>
      </SettingContainer>
    </>
  )
}

const MyInformation = () => {
  return <HorizontalLoginForm />
}

export default MyInformation
