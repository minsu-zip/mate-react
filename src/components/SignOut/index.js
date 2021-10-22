import { Link } from 'react-router-dom'
import GetSignOut from '@api/GetSignOut'
import styled from '@emotion/styled'

const Button = styled.button`
  color: black;
`

const SignIn = () => {
  return (
    <Link to="/">
      <Button onClick={GetSignOut}>로그아웃 버튼</Button>
    </Link>
  )
}

export default SignIn
