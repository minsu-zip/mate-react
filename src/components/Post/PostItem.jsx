import { List, Avatar, Space, Button } from 'antd'
import {
  MessageOutlined,
  LikeOutlined,
  DeleteOutlined,
  FormOutlined,
} from '@ant-design/icons'
import React, { useEffect, useState, useCallback } from 'react'
import { getItem } from '@SessionStorage'
import CommentContainer from '@components/Comment/CommentContainer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const IconStyle = {
  border: '0',
  paddingLeft: '0',
}

const PostItem = React.memo(({ item, pageState, deletePostHandle }) => {
  const [commentState, setCommentState] = useState(false)
  const [commentLength, setCommentLength] = useState(item.comments.length)

  const userId = getItem('userId')
  const token = getItem('userInformation')

  useEffect(() => {
    setCommentLength(item.comments.length)
  }, [item])

  useEffect(() => {
    setCommentState(false)
  }, [pageState])

  const increaseCommentLength = () => {
    setCommentLength(commentLength + 1)
  }

  const removePost = async () => {
    await axios({
      method: 'delete',
      url: 'http://13.209.30.200/posts/delete',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        id: item.postId,
      },
    })
    deletePostHandle()
  }

  const updatePost = () => {
    handleOnClick()
  }

  const history = useHistory()

  const handleOnClick = useCallback(
    () =>
      history.push({
        pathname: '/post/create',
        search: item.postId,
        state: { value: item.content, imagePublicId: item.imagePublicId },
      }),
    [history],
  )

  return (
    <>
      <List.Item
        style={{ marginBottom: '10px' }}
        key={item.title}
        actions={[
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <Button
            icon={<MessageOutlined />}
            onClick={() => setCommentState(!commentState)}
            style={IconStyle}
          >
            <span>{commentLength}</span>
          </Button>,

          item.authorId === userId ? (
            <Button
              icon={<DeleteOutlined />}
              onClick={removePost}
              style={IconStyle}
            />
          ) : (
            ''
          ),
          item.authorId === userId ? (
            <Button
              icon={<FormOutlined />}
              onClick={updatePost}
              style={IconStyle}
            />
          ) : (
            ''
          ),
        ]}
        extra={
          item.image ? <img width={272} alt="logo" src={item.image} /> : ''
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
        />
        {item.content}
      </List.Item>

      {commentState ? (
        <div>
          <CommentContainer
            comment={item.comments}
            postId={item.postId}
            increaseCommentLength={increaseCommentLength}
          ></CommentContainer>
        </div>
      ) : (
        ''
      )}
    </>
  )
})

export default PostItem
