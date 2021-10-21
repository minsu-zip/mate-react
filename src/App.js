import './App.css'
import { Route, Switch } from 'react-router'
import LoginPage from '@pages/LoginPage'
import HomePage from '@pages/HomePage'
import PostsPage from '@pages/PostsPage'
import MyPage from '@pages/MyPage'
import DefaultTemplate from '@components/template/DefaultTemplate'
import Footer from '@components/Footer'
const App = () => {
  return (
    <div className="App">
      <DefaultTemplate></DefaultTemplate>
      <Switch>
        <Route path="/" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/posts" exact>
          <PostsPage></PostsPage>
        </Route>
        <Route path="/home" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/mypage" exact>
          <MyPage></MyPage>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
