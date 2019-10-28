import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin';
import CreateEvent from './components/admin/CreateEvent';
import Event from './components/Event';
import Home from './components/Home';
import ManageEvent from './components/admin/ManageEvent';
import NotFound from './components/NotFound';
import PrivateRoute from './components/admin/PrivateRoute';
import { connect } from 'react-redux';

class AppRoutes extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props.user;
    const isLoggedInAsAdmin = !!(isAuthenticated && isAdmin);

    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/admin/login' component={AdminLogin} />

        <PrivateRoute
          path='/admin'
          isLoggedInAsAdmin={isLoggedInAsAdmin}
          component={Admin}
        />

        <PrivateRoute
          path='/events/create'
          isLoggedInAsAdmin={isLoggedInAsAdmin}
          component={CreateEvent}
        />

        <PrivateRoute
          path='/events/manage'
          isLoggedInAsAdmin={isLoggedInAsAdmin}
          component={ManageEvent}
        />

        <Route path='/events/:id' component={Event} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  {},
)(AppRoutes);
