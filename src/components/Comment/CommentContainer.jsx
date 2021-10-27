import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import CommentItem from './CommentItem'
import axios from 'axios'
const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props) => <CommentItem item={props} />}
  />
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

    useEffect(() => {
      if (comment.length <= 0) return
      const commentData = comment.map(({ comment, author, createdAt }) => {
        return {
          author: author.email,
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{comment}</p>,
          datetime: createdAt,
        }
      })

      setComments(commentData)
    }, [])

    const handleSubmit = () => {
      if (!value) {
        return
      }
      setSubmitting(true)

      setTimeout(async () => {
        await axios({
          method: 'post',
          url: `http://13.209.30.200/comments/create`,
          headers: {
            Authorization:
              'Bearer ' +
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxNzE4NjBhYjYzN2JjMTExOTdkZThhOCIsImVtYWlsIjoia2h3OTcwNDIxQGtha2FvLmNvbSJ9LCJpYXQiOjE2MzUyNTgyMDV9.PCHDllZkpZ2bXV89cRBig4UrZ8EHC-tj8wTxMlrXlos',
          },
          data: {
            comment: value,
            postId: postId,
          },
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })

        setSubmitting(false)
        setValue('')
        setComments([
          ...comments,
          {
            author: 'khw970421@kakao.com',
            avatar: 'https://joeschmoe.io/api/v1/random',
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
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
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
