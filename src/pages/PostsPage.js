import React from 'react'
import PostList from '@components/Post/PostList'
import styled from '@emotion/styled'

const PostContainer = styled.div`
  width: 80%;
  display: inline-block;
`

const PostsPage = () => {
  return (
    <>
      <PostContainer>
        <PostList></PostList>
      </PostContainer>
    </>
  )
}

export default PostsPage
