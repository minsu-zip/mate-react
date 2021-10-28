import React from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'
import Header from '@components/Header'
const PostContainer = styled.div`
  width: 70%;
`

const PostsPage = () => {
  return (
    <>
      <Header></Header>
      <PostContainer>
        <PostList></PostList>
      </PostContainer>
    </>
  )
}

export default PostsPage
