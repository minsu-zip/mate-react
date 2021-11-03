import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import CommentItem from './CommentItem'
import { getItem } from '@SessionStorage'
import axios from 'axios'
const { TextArea } = Input

const CommentList = ({ comments }) => (
  <>
    <List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={(props) => <CommentItem item={props} />}
    />
  </>
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
)

const CommentContainer = React.memo(
  ({ comment, postId, increaseCommentLength }) => {
    const [comments, setComments] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setValue] = useState('')
    const userEmail = getItem('userEmail')
    const userImage = getItem('userImage')

    useEffect(() => {
      if (comment.length <= 0) return
      const commentData = comment.map(({ comment, author, createdAt, _id }) => {
        return {
          author: author.email,
          avatar: author.image
            ? author.image
            : 'https://joeschmoe.io/api/v1/random',
          content: <p>{comment}</p>,
          datetime: createdAt,
          id: author._id,
          commentId: _id,
        }
      })

      setComments(commentData)
    }, [])

    const handleSubmit = () => {
      if (!value) {
        return
      }

      const token = getItem('userInformation')

      setSubmitting(true)

      setTimeout(async () => {
        await axios({
          method: 'post',
          url: `https://learn.programmers.co.kr/comments/create`,
          headers: {
            Authorization: 'Bearer ' + token,
          },
          data: {
            comment: value,
            postId: postId,
          },
        }).catch((error) => {
          console.log(error)
        })

        setSubmitting(false)
        setValue('')
        setComments([
          ...comments,
          {
            author: userEmail,
            avatar: userImage
              ? userImage
              : 'https://joeschmoe.io/api/v1/random',
            content: <p>{value}</p>,
            datetime: moment().fromNow(),
          },
        ])
      }, 1000)

      increaseCommentLength()
    }

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <>
              <Avatar
                src={
                  userImage ? userImage : 'https://joeschmoe.io/api/v1/random'
                }
                alt="Han Solo"
              />
            </>
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    )
  },
)

export default CommentContainer
