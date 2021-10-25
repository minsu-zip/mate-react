import { List } from 'antd'
import CommentItem from './CommentItem'
import React, { useEffect, useState } from 'react'

const CommentList = ({ comment }) => {
  const [commentList, setCommentList] = useState('')

  useEffect(() => {
    const commentData = comment.map(({ comment, author, createdAt }) => {
      return {
        author: author.email,
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: <p>{comment}</p>,
        datetime: createdAt,
      }
    })

    setCommentList(commentData)
  }, [])

  return (
    <>
      <List
        style={{ marginBottom: '20px' }}
        className="comment-list"
        itemLayout="horizontal"
        dataSource={commentList}
        renderItem={(item) => <CommentItem item={item}></CommentItem>}
      />
    </>
  )
}

export default CommentList
