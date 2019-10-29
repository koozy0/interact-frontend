import './App.css';
import './styles/styles.css';

import React, { Component } from 'react';

import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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
