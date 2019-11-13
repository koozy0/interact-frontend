import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const PrivateRoute = ({
  component: Component,
  isAllowed,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAllowed ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

export default PrivateRoute;
