import './App.css';

import { Event, Navbar } from './components';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin';
import AppRoutes from './AppRoutes';
import CreateEvent from './components/admin/CreateEvent';
import Home from './components/Home';
import ManageEvent from './components/admin/ManageEvent';
import NotFound from './components/NotFound';
import PrivateRoute from './components/admin/PrivateRoute';
import { Provider } from 'react-redux';
// import { loadUser } from './actions/user';
import openSocket from 'socket.io-client';
import store from './store';

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  // componentDidMount() {
  //   const socket = openSocket('http://localhost:5000');
  //   socket.on('message', message => console.log(message));

  //   socket.emit('client-message', 'hello this is the client');
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />

            <AppRoutes></AppRoutes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
