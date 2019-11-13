import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin';
import CreateEvent from './components/admin/CreateEvent';
import Event from './components/event/Event';
import Home from './components/home/Home';
import ManageEvent from './components/admin/ManageEvent';
import NotFound from './components/NotFound';
import PrivateRoute from './components/admin/PrivateRoute';
import { connect } from 'react-redux';

class AppRoutes extends Component {
  render() {
    const { isAuthenticated } = this.props.user;
    console.log(isAuthenticated);

    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/admin/login' component={AdminLogin} />

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

        <Route path='/events/:eventCode' component={Event} />

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
