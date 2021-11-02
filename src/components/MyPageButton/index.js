import { useHistory } from 'react-router-dom'

const MyPageButton = ({ style }) => {
  const history = useHistory()
  const moveToMyPage = () => {
    history.push('/mypage')
  }
  return (
    <button style={style} onClick={moveToMyPage}>
      MyPage
    </button>
  )
}

export default MyPageButton
