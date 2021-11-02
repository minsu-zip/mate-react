import './App.css'
import { Route, Switch } from 'react-router'
import PrivateRoute from '@components/Route/PrivateRoute'
import {
  PostsPage,
  MyPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  PostCreatePage,
  AdminPage,
} from '@pages'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <SignInPage></SignInPage>
        </Route>

        <Route path="/register" exact>
          <SignUpPage></SignUpPage>
        </Route>

        <PrivateRoute component={PostsPage} path="/posts" exact />
        <PrivateRoute component={PostCreatePage} path="/post/create" exact />
        <PrivateRoute component={MyPage} path="/mypage" exact />
        <PrivateRoute component={AdminPage} path="/admin" exact />

        <Route path="*" exact>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </div>
  )
}

export default App
