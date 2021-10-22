import { Link } from 'react-router-dom'
import { GetSignOut } from '../Api'

const SignIn = () => {
  return (
    <Link to="/register">
      <button onClick={GetSignOut}>로그아웃 버튼</button>
    </Link>
  )
}

export default SignIn
