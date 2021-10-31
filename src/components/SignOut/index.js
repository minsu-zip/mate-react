import { Link } from 'react-router-dom'
import GetSignOut from '@api/GetSignOut'

const SignOut = ({ style }) => {
  return (
    <Link to="/">
      <button onClick={GetSignOut} style={style}>
        Logout
      </button>
    </Link>
  )
}

export default SignOut
