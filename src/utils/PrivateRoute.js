import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/auth.service';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {

  const verify = authService.verify();

  return (
    <Route
      {...rest}
      render={(props) => verify ? <Component {...props}/> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;