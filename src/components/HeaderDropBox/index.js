import SignOut from '../SignOut'
import MyPage from '../MyPageButton'
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
      <MyPage style={buttonStyle} />
      <SignOut style={buttonStyle} />
    </div>
  )
}

export default HeaderDropBox
