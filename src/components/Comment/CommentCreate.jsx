import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React, { useState } from 'react'

const { TextArea } = Input

const CommentCreate = ({ postId, Refresh }) => {
  const [value, setValue] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    if (!value) {
      return
    }

    setSubmitting(true)

    setTimeout(() => {
      axios({
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
        .then(() => {
          setSubmitting(false)
          setValue('')
          Refresh()
        })
        .catch((error) => {
          console.log(error)
          setValue('')
        })
    }, 1000)
  }

  return (
    <>
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
}

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

export default CommentCreate
