import { List, Button } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { EditTwoTone } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
const PostList = ({ selectChannel }) => {
  const [postList, setPostList] = useState([])

  console.log(selectChannel)
  const getPostList = async () => {
    const { data } = await axios.get(
      `http://13.209.30.200/posts/channel/${selectChannel}?offset&limit`,
    )
    console.log(data)

    const postData = data.map(
      ({ title, author, comments, image, imagePublicId, _id, likes }) => {
        return {
          title: author.email,
          content: title,
          comments: comments.length > 0 ? comments : '',
          avatar: author.image
            ? author.image
            : 'https://joeschmoe.io/api/v1/random',
          href: 'https://ant.design',
          imagePublicId,
          image,
          postId: _id,
          authorId: author._id,
          likes,
        }
      },
    )

    setPostList(postData)
  }

  useEffect(() => {
    getPostList()
  }, [selectChannel])

  const history = useHistory()

  const handleOnClick = () =>
    history.push({
      pathname: '/post/create',
      state: { channelId: selectChannel, updateCheck: false },
    })
  const [pageState, setPageState] = useState(false)
  const onClickDeleteBtn = (removeId) => {
    console.log(removeId)
    console.log(postList)
    setPostList(
      postList.filter(({ postId }) => {
        return postId !== removeId ? true : false
      }),
    )
    console.log(postList)
  }
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
          <PostItem
            item={item}
            pageState={pageState}
            selectChannel={selectChannel}
            onClickDeleteBtn={onClickDeleteBtn}
          ></PostItem>
        )}
      />
    </>
  )
}

export default PostList
