import { Link } from 'react-router-dom'
import { getRequest } from '@api/index.js'
import { Button } from 'antd'
const SignOut = () => {
  return (
    <Link to="/">
      <Button
        style={{ margin: '10px 5px 10px 5px' }}
        onClick={() => {
          getRequest('logout')
        }}
      >
        Logout
      </Button>
    </Link>
  )
}

export default SignOut
