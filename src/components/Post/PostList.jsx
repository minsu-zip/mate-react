import { List, Button } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { EditTwoTone } from '@ant-design/icons'

import { useHistory } from 'react-router-dom'
const PostList = () => {
  const [postList, setPostList] = useState([])

  const getPostList = async () => {
    const { data } = await axios.get(
      `http://13.209.30.200/posts/channel/616a200d22996f0bc94f6db5?offset&limit`,
    )

    const postData = data.map(({ title, author, comments, image }) => {
      return {
        title: author.email,
        content: title,
        comments: comments.length > 0 ? comments : '',
        avatar: 'https://joeschmoe.io/api/v1/random',
        href: 'https://ant.design',
        image,
      }
    })

    setPostList(postData)
  }

  useEffect(() => {
    getPostList()
  }, [])

  const history = useHistory()

  const handleOnClick = useCallback(() => history.push('/post/create'), [
    history,
  ])

  const [pageState, setPageState] = useState(false)

  return (
    <>
      <Button
        shape="circle"
        size="large"
        icon={<EditTwoTone />}
        onClick={handleOnClick}
        style={{ float: 'right', marginRight: '20px' }}
      />

      <List
        style={{ clear: 'both' }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            setPageState(!pageState)
          },
          pageSize: 7,
        }}
        dataSource={postList}
        renderItem={(item) => (
          <PostItem item={item} pageState={pageState}></PostItem>
        )}
      />
    </>
  )
}

export default PostList
