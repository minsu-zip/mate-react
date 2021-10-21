import React from 'react'
import LoginForm from './components/LoginForm/index.js'
import UserLoginStore from './components/context/contextLogin'

function App() {
  return (
    <UserLoginStore>
      <LoginForm></LoginForm>
    </UserLoginStore>
  )
}

export default App
