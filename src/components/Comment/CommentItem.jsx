import { Comment } from 'antd'
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { getItem } from '@SessionStorage'
import axios from 'axios'

const CommentItem = React.memo(({ item }) => {
  const userId = getItem('userId')

  const removeComment = async () => {
    const token = getItem('userInformation')
    await axios({
      method: 'delete',
      url: 'https://learn.programmers.co.kr/comments/delete',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        id: item.commentId,
      },
    }).catch((error) => console.log(error))
  }

  return (
    <>
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
      {item.id === userId ? (
        <Button onClick={removeComment} icon={<DeleteOutlined />} />
      ) : (
        ''
      )}
    </>
  )
})

export default CommentItem
