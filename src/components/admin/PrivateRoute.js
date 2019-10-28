import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const PrivateRoute = ({ component: Component, isLoggedInAsAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedInAsAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect to='/admin/login' />
      )
    }
  />
);

export default PrivateRoute;
