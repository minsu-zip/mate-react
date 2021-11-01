import { List, Avatar, Space, Button } from 'antd'
import {
  MessageOutlined,
  LikeOutlined,
  DeleteOutlined,
  FormOutlined,
  DislikeOutlined,
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

const PostItem = React.memo(
  ({ item, pageState, deletePostHandle, selectChannel }) => {
    console.log(item)
    const [commentState, setCommentState] = useState(false)
    const [commentLength, setCommentLength] = useState(item.comments.length)
    const [likeLength, setLikeLength] = useState(item.likes.length)
    const [likeState, setLikeState] = useState(true)

    const userId = getItem('userId')
    const token = getItem('userInformation')

    useEffect(() => {
      item.likes.filter((like) => {
        if (like.user === userId) setLikeState(false)
      })
    }, [])

    useEffect(() => {
      setCommentLength(item.comments.length)
      setLikeLength(item.likes.length)
    }, [item])

    useEffect(() => {
      setCommentState(false)
    }, [pageState])

    const increaseCommentLength = () => {
      setCommentLength(commentLength + 1)
    }

    const likeButton = async () => {
      await axios({
        method: 'post',
        url: 'http://13.209.30.200/likes/create',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          postId: item.postId,
        },
      })
      setLikeLength(likeLength + 1)
      setLikeState(!likeState)
    }

    const likeCancelButton = async () => {
      const likeId = item.likes.find((like) => like.user === userId)

      await axios({
        method: 'delete',
        url: 'http://13.209.30.200/likes/delete',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          id: likeId._id,
        },
      })
      setLikeLength(likeLength - 1)
      setLikeState(!likeState)
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

    const handleOnClick = () =>
      history.push({
        pathname: '/post/create',
        search: item.postId,
        state: {
          value: item.content,
          imagePublicId: item.imagePublicId,
          channelId: selectChannel,
          updateCheck: true,
        },
      })

    return (
      <>
        <List.Item
          style={{ marginBottom: '10px' }}
          key={item.title}
          actions={[
            likeState ? (
              <Button
                icon={<LikeOutlined />}
                key="list-vertical-like-o"
                onClick={likeButton}
                style={IconStyle}
              >
                <span>{likeLength}</span>
              </Button>
            ) : (
              <Button
                icon={<DislikeOutlined />}
                key="list-vertical-like-o"
                onClick={likeCancelButton}
                style={IconStyle}
              >
                <span>{likeLength}</span>
              </Button>
            ),

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
  },
)

export default PostItem
