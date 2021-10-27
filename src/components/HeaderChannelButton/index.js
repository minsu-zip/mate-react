const HeaderChannelButton = ({ text }) => {
  const style = {
    height: '40px',
    borderRadius: '1.5em',
    padding: '10px',
    margin: '10px 5px 0 10px',
  }
  return <button style={style}>{text}</button>
}

export default HeaderChannelButton
