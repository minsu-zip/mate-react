import React from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'
import Header from '@components/Header'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PostContainer = styled.div`
  width: 70%;
`

const PostsPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <PostContainer>
          <PostList></PostList>
        </PostContainer>
      </Container>
    </>
  )
}

export default PostsPage
