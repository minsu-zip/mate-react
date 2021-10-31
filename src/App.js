import './App.css'
import { Route, Switch } from 'react-router'
import {
  LoginPage,
  HomePage,
  PostsPage,
  MyPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  PostCreatePage,
  AdminPage,
} from '@pages'
import DefaultTemplate from '@components/template/DefaultTemplate'
import styled from '@emotion/styled'

// import Footer from '@components/Footer'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const App = () => {
  return (
    <div className="App">
      <DefaultTemplate></DefaultTemplate>

      <Switch>
        <Route path="/" exact>
          <SignInPage></SignInPage>
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
        <Route path="/register" exact>
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/post/create" exact>
          <PostCreatePage></PostCreatePage>
        </Route>
        <Route path="/admin" exact>
          <AdminPage></AdminPage>
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
