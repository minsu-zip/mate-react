import { List, Button } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import PostItem from './PostItem'
import { EditTwoTone } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Input } from 'antd'
import { getPost } from '@apis/api/post'
import { getPostList } from '@apis/services/post'

const { Search } = Input

const PostList = React.memo(({ selectChannel }) => {
  const history = useHistory()

  const [postList, setPostList] = useState([])
  const [postCopy, setPostCopy] = useState([])
  const [pageState, setPageState] = useState(false)

  useEffect(() => {
    ;(async () => {
      await getPost(selectChannel)
        .then(getPostList)
        .then((res) => {
          setPostList(res)
          setPostCopy(res)
        })
      setPageState(!pageState)
    })()
  }, [selectChannel])

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
