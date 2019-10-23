import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './layout';
import { Home } from './views';
import { Admin } from './admin';
import { Event } from './event';
import openSocket from 'socket.io-client';

class App extends Component {
  componentDidMount() {
    const socket = openSocket('http://localhost:5000');
    socket.on('message', message => console.log(message));

    socket.emit('client-message', 'hello this is the client');
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/event' component={Event} />
        </div>
      </Router>
    );
  }
}

export default App;
