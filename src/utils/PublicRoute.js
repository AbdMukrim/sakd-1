import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/auth.service';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  
  const verify = authService.verify();

  return (
    <Route
      {...rest}
      render={(props) => !verify ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
}
 
export default PublicRoute;