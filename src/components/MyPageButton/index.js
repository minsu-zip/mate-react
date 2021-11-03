import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
const MyPageButton = ({ style }) => {
  const history = useHistory()
  const moveToMyPage = () => {
    history.push('/mypage')
  }
  return (
    // <button style={style} onClick={moveToMyPage}>
    //   MyPage
    // </button>

    <Button
      style={{ margin: '10px 5px 10px 5px', fontSize: '12px' }}
      onClick={moveToMyPage}
    >
      MyPage
    </Button>
  )
}

export default MyPageButton
