import { List, Avatar, Space, Button } from 'antd'
import { MessageOutlined, LikeOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import CommentList from '@components/Comment/CommentList'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const PostItem = ({ item }) => {
  return (
    <>
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <Button
            icon={<MessageOutlined />}
            style={{ border: '0', paddingLeft: '0' }}
          >
            <span>{item.comments.length}</span>
          </Button>,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          // description={item.description}
        />
        {item.content}
      </List.Item>
    </>
  )
}

export default PostItem
