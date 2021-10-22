import axios from 'axios'
import { Link } from 'react-router-dom'

const API_END_POINT = 'http://13.209.30.200'
async function GetSignOut() {
  try {
    await axios
      .post(`${API_END_POINT}/logout`)
      .then((res) => res.data)
      .then((data) => {
        alert(data)
      })
    sessionStorage.removeItem('useInformation')
  } catch (error) {
    console.log(error)
  }
}

const SignIn = () => {
  return (
    <Link to="/register">
      <button onClick={GetSignOut}>로그아웃 버튼</button>
    </Link>
  )
}

export default SignIn
