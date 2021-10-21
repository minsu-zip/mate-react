import './App.css'
import { Route, Switch } from 'react-router'
import { LoginPage, HomePage, PostsPage, MyPage, NotFoundPage } from '@pages'
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
        <Route path="*" exact>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
