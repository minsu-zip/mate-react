const HeaderDropBox = () => {
  const divStyle = {
    display: 'flex',
  }
  const buttonStyle = {
    marginTop: 18,
    padding: '5px 10px',
    height: '35px',
    border: '1px solid #dadada',
    backgroundColor: '#E2C2B9',
    fontSize: '14px',
    color: '#1C7947',
  }
  return (
    <div style={divStyle}>
      <button style={buttonStyle}>MyPage</button>
      <button style={buttonStyle}>Logout</button>
    </div>
  )
}

export default HeaderDropBox
