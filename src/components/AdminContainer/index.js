import React, { useState, useEffect, useCallback } from 'react'
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
import { getRequest } from '@api/index.js'
import { getItem } from '@SessionStorage'

import './index.css'
import axios from 'axios'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
const API_END_POINT = 'https://learn.programmers.co.kr'
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

const Admin = () => {
  const [isAllUsersShow, setIsAllUsersShow] = useState(true)
  const [isOnlineUsersShow, setIsOnlineUsersShow] = useState(false)
  const [getAllUserState, setGetAllUserState] = useState([])
  const [getCopyAllUserState, setGetCopyAllUserState] = useState([])
  const [getOnlineUserState, setGetOnlineUserState] = useState([])
  const [loading, setLoading] = useState(true)

  const history = useHistory()
  const NotFound = useCallback(() => history.push('/NotFound'), [history])

  const onChange = (checked) => {
    setLoading(!checked)
  }

  const onlineFirstCheck = { false: 0, true: 1 }

  useEffect(() => {
    if (!sessionStorage.getItem('admin')) {
      NotFound()
    }
    const fetchUsers = async () => {
      const allData = await getRequest('users/get-users')
      const sortAllData = allData.sort(
        (a, b) => onlineFirstCheck[b.isOnline] - onlineFirstCheck[a.isOnline],
      )
      setGetCopyAllUserState(sortAllData)
      setGetAllUserState(sortAllData)
      onChange(true)
      const onlineData = await getRequest('users/online-users')
      setGetOnlineUserState(onlineData)
    }
    fetchUsers()
  }, [])

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
