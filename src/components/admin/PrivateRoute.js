import { Redirect, Route } from 'react-router-dom';

import React from 'react';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ isLoggedInAsAdmin, children, ...rest }) {
  console.log(isLoggedInAsAdmin);

  return (
    <Route
      {...rest}
      render={() =>
        isLoggedInAsAdmin ? (
          children
        ) : (
          <Redirect to={{ pathname: '/admin/login' }} />
        )
      }
    />
  );
}
