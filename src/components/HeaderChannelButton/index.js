const HeaderChannelButton = ({ name, channelId }) => {
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
    <button id={channelId} style={style}>
      {name}
    </button>
  )
}

export default HeaderChannelButton
