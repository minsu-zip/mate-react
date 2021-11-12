import { List, Button } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import PostItem from './PostItem'
import { EditTwoTone } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Input } from 'antd'
import { getPost } from '@apis/services/post'

const { Search } = Input

const PostList = React.memo(({ selectChannel }) => {
  const history = useHistory()

  const [postList, setPostList] = useState([])
  const [postCopy, setPostCopy] = useState([])
  const [pageState, setPageState] = useState(false)

  useEffect(() => {
    ;(async () => {
      const rawPost = await getPost(selectChannel)
      const postData = getList(rawPost)
      setPostList(postData)
      setPostCopy(postData)
      setPageState(!pageState)
    })()
  }, [selectChannel])

  const getList = (rawPost) => {
    const postData = rawPost.map(
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
    return postData
  }

  const handleOnClick = () =>
    history.push({
      pathname: '/post/create',
      state: { channelId: selectChannel, updateCheck: false },
    })

  const onClickDeleteBtn = (removeId) => {
    setPostList(
      postList.filter(({ postId }) => {
        return postId !== removeId ? true : false
      }),
    )
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
