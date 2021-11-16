import { List, Avatar, Space, Button } from 'antd'
import {
  MessageOutlined,
  LikeOutlined,
  DeleteOutlined,
  FormOutlined,
  LikeFilled,
} from '@ant-design/icons'
import React, { useEffect, useState, useCallback } from 'react'
import { getItem } from '@SessionStorage'
import CommentContainer from '@components/Comment/CommentContainer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { likeComment, likeCancelComment } from '@apis/api/comment'
import { deletePost } from '@apis/api/post'

const IconStyle = {
  border: '0',
  paddingLeft: '0',
}

const PostItem = React.memo(
  ({ item, pageState, selectChannel, onDeletePostButton }) => {
    const [commentState, setCommentState] = useState(true)
    const [commentLength, setCommentLength] = useState(item.comments.length)
    const [likeLength, setLikeLength] = useState(item.likes.length)
    const [likeState, setLikeState] = useState(true)
    const [likeId, setLikeId] = useState()

    const userId = getItem('userId')
    const token = getItem('userInformation')

    useEffect(() => {
      item.likes.filter((like) => {
        if (like.user === userId) {
          setLikeState(false)
          setLikeId(like._id)
        }
      })
    }, [item])

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

    const likeButton = () => {
      ;(async () => {
        const likeId = await likeComment({ postId: item.postId })
        setLikeId(likeId)
        setLikeLength(likeLength + 1)
        setLikeState(!likeState)
      })()
    }

    const likeCancelButton = () => {
      ;(async () => {
        await likeCancelComment({ id: likeId })
        setLikeLength(likeLength - 1)
        setLikeState(!likeState)
      })()
    }

    const deletePostButton = () => {
      ;(async () => {
        await deletePost({ id: item.postId })
      })()

      onDeletePostButton(item.postId)
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
          style={{ marginBottom: '10px', boxShadow: '0px 0px 15px #c0c0c0' }}
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
                icon={<LikeFilled />}
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
                onClick={deletePostButton}
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
