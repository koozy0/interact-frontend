import './App.css';

import { Admin, Event, Navbar } from './components';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import openSocket from 'socket.io-client';
import store from './store';

class App extends Component {
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

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/admin' component={Admin} />
              <Route path='/events/:id' component={Event} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
