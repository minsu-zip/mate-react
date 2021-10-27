import { List, Avatar, Space, Button } from 'antd'
import { MessageOutlined, LikeOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import CommentContainer from '@components/Comment/CommentContainer'
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const PostItem = React.memo(({ item, pageState }) => {
  const [commentState, setCommentState] = useState(false)
  const [commentLength, setCommentLength] = useState(item.comments.length)

  useEffect(() => {
    setCommentLength(item.comments.length)
  }, [item])

  useEffect(() => {
    setCommentState(false)
  }, [pageState])

  const increaseCommentLength = () => {
    setCommentLength(commentLength + 1)
  }

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
            style={{ border: '0', paddingLeft: '0' }}
          >
            <span>{commentLength}</span>
          </Button>,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={
              item.image
                ? item.image
                : 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            }
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
        />
        {item.content}
      </List.Item>

      {commentState ? (
        <div>
          <CommentContainer
            comment={item.comments}
            postId={item.id}
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
