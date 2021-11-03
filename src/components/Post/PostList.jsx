import { List, Button } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { EditTwoTone } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Input } from 'antd'
const { Search } = Input

const PostList = React.memo(({ selectChannel }) => {
  const [postList, setPostList] = useState([])
  const [postCopy, setPostCopy] = useState([])

  const getPostList = async () => {
    const { data } = await axios.get(
      `https://learn.programmers.co.kr/posts/channel/${selectChannel}?offset&limit`,
    )

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
    setPostCopy(postData)
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

  const onSearch = (value) => {
    if (value === '') {
      setPostList(postCopy)
    } else {
      const result = postList.filter((post) => post.content.includes(value))
      setPostList(result)
    }
  }

  return (
    <>
      <Search
        placeholder="content search"
        onSearch={onSearch}
        style={{ marginTop: '20px', width: '80%' }}
      />

      <Button
        shape="circle"
        size="large"
        icon={<EditTwoTone />}
        onClick={handleOnClick}
        style={{ float: 'right', marginRight: '20px', marginTop: '20px' }}
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
})
export default PostList
