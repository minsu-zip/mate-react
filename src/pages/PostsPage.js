import React from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'

const Container = styled.div`
  /* width: 80%; */
  margin-left: 50px;
  margin-right: 50px;
`

const PostsPage = () => {
  return (
    <>
      <Container>
        <PostList></PostList>
      </Container>
    </>
  )
}

export default PostsPage
