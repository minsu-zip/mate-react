import React from 'react'

const HeaderChannelButtons = ({ channelList, channelClick }) => {
  const style = {
    height: 40,
    padding: '0px 10px 0px 10px',
    margin: '8px 0px 8px 25px', // T R B L
    fontSize: 14,
    fontWeight: 'bold',
    border: '1px solid lightgray',
    borderRadius: 10,
    backgroundColor: '#FCFFA6',
  }

  return (
    <>
      {channelList.map((channel) => (
        <button className={channel._id} style={style} onClick={channelClick}>
          {channel.name === '론 2팀'
            ? '자유게시판'
            : channel.name === 'ron2CulturalLife'
            ? '문화생활'
            : channel.name === 'ron2Sport'
            ? '스포츠'
            : channel.name === 'ron2Food'
            ? '음식'
            : ''}
        </button>
      ))}
    </>
  )
}
export default HeaderChannelButtons
