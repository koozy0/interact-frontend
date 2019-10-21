import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './layout';
import { Home } from './views';
import { Admin } from './admin';
import { Event } from './event';

function App() {
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

export default App;
