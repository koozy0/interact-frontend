import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './layout';
import { Home } from './views';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/admin' />
        <Route path='/event' />
      </div>
    </Router>
  );
}

export default App;
