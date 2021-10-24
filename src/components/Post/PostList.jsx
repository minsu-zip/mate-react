import { List } from 'antd'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

const PostList = () => {
  const [postList, setPostList] = useState([])

  const getPostList = async () => {
    const { data } = await axios.get(
      `http://13.209.30.200/posts/channel/616a200d22996f0bc94f6db5?offset&limit`,
    )

    const postData = data.map(({ title, author, comments }) => {
      return {
        title: author.email,
        content: title,
        comments: comments.length > 0 ? comments : '',
        avatar: 'https://joeschmoe.io/api/v1/random',
        href: 'https://ant.design',
      }
    })

    setPostList(postData)
  }

  useEffect(() => {
    getPostList()
  }, [])

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 7,
        }}
        dataSource={postList}
        renderItem={(item) => <PostItem item={item}></PostItem>}
      />
    </>
  )
}

export default PostList
