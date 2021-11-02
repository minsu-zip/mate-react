import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getItem } from '@SessionStorage'
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getItem('userInformation')
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
export default PrivateRoute
