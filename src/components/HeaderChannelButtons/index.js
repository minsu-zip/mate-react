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
  const channels = [
    { name: '음식', id: '61790be26e7b13674f9dd39b' },
    { name: '스포츠', id: '61729b42eaccb833ce222a52' },
    { name: '문화', id: '61790c416e7b13674f9dd43d' },
    { name: '론2팀', id: '616a200d22996f0bc94f6db5' },
  ]

  const showName = (e) => {
    alert(e.target.textContent)
  }

  return channels.map((channel) => (
    <button id={channel.id} style={style} onClick={showName}>
      {channel.name}
    </button>
  ))
}
export default HeaderChannelButtons
