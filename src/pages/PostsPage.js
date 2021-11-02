import React, { useEffect, useState } from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'
import Header from '@components/Header'
import HeaderChannelButtons from '@components/HeaderChannelButtons'
import GetChannelInfo from '@api/GetChannelInfo'
import axios from 'axios'

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

const PostsPage = () => {
  const [channelList, setChannelList] = useState([])
  const [selectChannel, setSelectChannel] = useState('616a200d22996f0bc94f6db5')

  useEffect(() => {
    GetChannelInfo().then((res) => {
      setChannelList(res)
    })
  }, [])

  const channelClick = (e) => {
    setSelectChannel(e.target.className)
  }

  return (
    <>
      <Header></Header>

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
