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

import './index.css'
import axios from 'axios'
import styled from '@emotion/styled'
const API_END_POINT = 'http://13.209.30.200'
const { Meta } = Card
const { Search } = Input
const AllUsersContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
`

const OnlineUsersContainer = styled.div`
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

const GetOnlineUsers = async () => {
  return await axios({
    method: 'get',
    url: `${API_END_POINT}/users/online-users`,
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
  const [getAllUserState, setGetAllUserState] = useState([])
  const [getCopyAllUserState, setGetCopyAllUserState] = useState([])
  const [getOnlineUserState, setGetOnlineUserState] = useState([])
  const [loading, setLoading] = useState(true)

  const onChange = (checked) => {
    setLoading(!checked)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const allData = await GetUsers()
      setGetCopyAllUserState(allData)
      setGetAllUserState(allData)
      onChange(true)
      const onlineData = await GetOnlineUsers()
      setGetOnlineUserState(onlineData)
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

  const changeUserHanlder = ({ target }) => {
    if (target.value === '') {
      setGetAllUserState(getCopyAllUserState)
    }
  }

  const searchUserHandler = (e) => {
    let target
    const isTargetExist = getAllUserState.some(
      ({ isOnline, fullName, email, image, coverImage }) => {
        target = [{ isOnline, fullName, email, image, coverImage }]
        return e === fullName
      },
    )
    if (isTargetExist) {
      setGetAllUserState(target)
    } else {
      message.warning('존재하지 않는 유저의 이름을 입력했습니다')
    }
    console.log(isTargetExist, target)
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

      <AllUsersContainer display={isAllUsersShow} className="allUsersContainer">
        <Search
          className="searchContainer"
          placeholder="fullName 검색"
          enterButton="Search"
          size="large"
          onChange={changeUserHanlder}
          onSearch={searchUserHandler}
        />
        <CardGrid>
          {getAllUserState.map(
            ({ isOnline, fullName, email, image, coverImage }) => {
              return (
                <div>
                  <Switch
                    checked={isOnline}
                    checkedChildren="online"
                    unCheckedChildren="offline"
                  />
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
                        height="250px"
                      />
                    }
                  >
                    <Meta
                      avatar={
                        <Avatar
                          src={
                            image ? image : 'https://joeschmoe.io/api/v1/random'
                          }
                        />
                      }
                      title={fullName}
                      description={email}
                    />
                  </Card>
                </div>
              )
            },
          )}
        </CardGrid>
      </AllUsersContainer>
      <OnlineUsersContainer
        display={isOnlineUsersShow}
        className="onlineUsersContainer"
      >
        <CardGrid>
          {getOnlineUserState.length !== 0
            ? getOnlineUserState.map(
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
      </OnlineUsersContainer>
    </>
  )
}

export default Admin
