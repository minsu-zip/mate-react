import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/posts">posts</Link>
        </li>
        <li>
          <Link to="/mypage">mypage</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
