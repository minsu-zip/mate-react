import { Link } from 'react-router-dom'
import { getRequest } from '@api/index.js'

const SignOut = ({ style }) => {
  return (
    <Link to="/">
      <button
        onClick={() => {
          getRequest('logout')
        }}
        style={style}
      >
        Logout
      </button>
    </Link>
  )
}

export default SignOut
