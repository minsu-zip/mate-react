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
  Image,
  Switch,
} from 'antd'

import axios from 'axios'
import styled from '@emotion/styled'
const API_END_POINT = 'http://13.209.30.200'
const { Meta } = Card
const ProfileContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
`

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: end;
  align-items: end;
  justify-items: center;
  align-items: center;
`

const GetUsers = async () => {
  return await axios({
    method: 'get',
    url: `${API_END_POINT}/users/get-users`,
  })
    .then((response) => response.data)
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

const Admin = () => {
  const [isAllUsersShow, setIsAllUsersShow] = useState(true)
  const [isOnlineUsersShow, setIsOnlineUsersShow] = useState(false)
  const [getDataState, setGetDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const onChange = (checked) => {
    setLoading(!checked)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers()
      setGetDataState(data)
      onChange(true)
    }
    fetchUsers()
  }, [])

  GetUsers()

  const headerName = {
    titleName: ['유저 목록', '접속중인 유저 목록'],
    keyName: ['allUsers', 'onlineUsers'],
  }

  const clickHeaderHandler = ({ key }) => {
    if (headerName.keyName[key] === 'allUsers') {
      setIsAllUsersShow(true)
      setIsOnlineUsersShow(false)
    } else if (headerName.keyName[key] === 'onlineUsers') {
      setIsAllUsersShow(false)
      setIsOnlineUsersShow(true)
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

      <ProfileContainer display={isAllUsersShow} className="profileContainer">
        <CardGrid>
          {getDataState.length !== 0
            ? getDataState.map(
                ({ isOnline, fullName, email, image, coverImage }) => {
                  return (
                    <>
                      <Card
                        style={{ width: 300, marginTop: 16 }}
                        loading={loading}
                        cover={
                          <img
                            alt="example"
                            src={
                              coverImage
                                ? coverImage
                                : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            }
                          />
                        }
                      >
                        <Meta
                          avatar={
                            <Avatar
                              src={
                                image
                                  ? image
                                  : 'https://joeschmoe.io/api/v1/random'
                              }
                            />
                          }
                          title={fullName}
                          description={email}
                        />
                      </Card>
                    </>
                  )
                },
              )
            : ''}
        </CardGrid>
      </ProfileContainer>
    </>
  )
}

export default Admin
