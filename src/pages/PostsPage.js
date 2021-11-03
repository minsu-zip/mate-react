import React, { useEffect, useState } from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'
// import Header from '@components/Header'
import HeaderChannelButtons from '@components/HeaderChannelButtons'
import GetChannelInfo from '@api/GetChannelInfo'
import { Layout, Menu, Breadcrumb, message } from 'antd'
import { Input, Space, Avatar, Button } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { getItem } from '@SessionStorage'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SignOut from '@components/SignOut'
import MyPage from '@components/MyPageButton'

const { Header, Content, Footer } = Layout
const { Search } = Input
const API_END_POINT = 'http://13.209.30.200'

const onSearch = (value) => console.log(value)

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: 'white';
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PostContainer = styled.div`
  width: 70%;
`

const ChannelButton = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  white-space: nowrap;
  flex-wrap: nowrap;
`

const PostsPage = () => {
  const history = useHistory()
  const [channelList, setChannelList] = useState([])
  const [selectChannel, setSelectChannel] = useState('616a200d22996f0bc94f6db5')
  let searchChannelId
  useEffect(() => {
    GetChannelInfo().then((res) => {
      setChannelList(res)
    })
  }, [])

  const channelClick = (e) => {
    setSelectChannel(e.target.className)
  }

  const userImg = getItem('userImage')

  const onClickSearchBtn = async (value) => {
    const channelData = await axios
      .get(`${API_END_POINT}/channels`)
      .then((res) => res.data)
    const isChannelNameExist = channelData.some(({ name, _id }) => {
      searchChannelId = _id
      return name === value
    })

    if (isChannelNameExist) {
      message.success('채널 검색 성공')
      setSelectChannel(searchChannelId)
    } else {
      message.error('채널 검색 실패')
    }
  }

  return (
    <>
      <>
        <div
          style={{ backgroundColor: '#E2E2E2', padding: '10px 0px 10px 0px' }}
        >
          <HeaderContainer>
            <img src="https://ifh.cc/g/XTsvNi.png" style={{ height: '70px' }} />

            <Search
              placeholder="input search text"
              onSearch={onClickSearchBtn}
              style={{ width: 400, backgroundColor: 'white' }}
            />
            <div>
              <Avatar size={64} src={userImg} />

              <MyPage />
              <SignOut />
            </div>
          </HeaderContainer>
        </div>
      </>

      <ChannelButton>
        <HeaderChannelButtons
          channelList={channelList}
          channelClick={channelClick}
        />
      </ChannelButton>

      <Container>
        <PostContainer>
          <PostList selectChannel={selectChannel}></PostList>
        </PostContainer>
      </Container>
    </>
  )
}

export default PostsPage
