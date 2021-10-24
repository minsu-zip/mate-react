import { Comment } from 'antd'
import React from 'react'

const CommentItem = ({ item }) => {
  return (
    <>
      <li>
        <Comment
          // actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    </>
  )
}

export default CommentItem
