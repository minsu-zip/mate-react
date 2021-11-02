import React, { useEffect, useState } from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'
import Header from '@components/Header'
import HeaderChannelButtons from '@components/HeaderChannelButtons'
import GetChannelInfo from '@api/GetChannelInfo'
import axios from 'axios'
import { message } from 'antd'

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
  overflow-x: scroll;
  flex-wrap: nowrap;
`
const searchValue = 100
const API_END_POINT = 'http://13.209.30.200'

const PostsPage = () => {
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
      <Header
        searchValue={searchValue}
        onClickSearchBtn={onClickSearchBtn}
      ></Header>

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
