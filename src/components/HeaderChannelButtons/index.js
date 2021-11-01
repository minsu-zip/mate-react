import GetChannelInfo from '@api/GetChannelInfo'

const HeaderChannelButtons = () => {
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

  const channels = GetChannelInfo()

  const showName = (e) => {
    alert(e.target.className)
  }
  return channels.map((channel) => (
    <button className={channel._id} style={style} onClick={showName}>
      {channel.name}
    </button>
  ))
}
export default HeaderChannelButtons
