import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './components/admin/Admin';
import CreateAdmin from './components/admin/Create';
import CreateEvent from './components/admin/CreateEvent';
import Event from './components/event/Event';
import Home from './components/home/Home';
import LoginAdmin from './components/admin/Login';
import ManageEvent from './components/admin/ManageEvent';
import NotFound from './components/NotFound';
import PrivateRoute from './components/admin/PrivateRoute';
import { connect } from 'react-redux';

class AppRoutes extends Component {
  render() {
    const { isAuthenticated } = this.props.user;

    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/admin/login' component={LoginAdmin} />

        <Route path='/admin/create' component={CreateAdmin} />

        <PrivateRoute
          path='/admin'
          redirectTo='/admin/login'
          isAllowed={isAuthenticated}
          component={Admin}
        />

        <PrivateRoute
          path='/events/create'
          redirectTo='/admin/login'
          isAllowed={isAuthenticated}
          component={CreateEvent}
        />

        <PrivateRoute
          path='/events/manage'
          redirectTo='/admin/login'
          isAllowed={isAuthenticated}
          component={ManageEvent}
        />

        <Route path='/events/:eventId' component={Event} />

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
