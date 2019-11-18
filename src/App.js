import './App.css';
import './styles/styles.css';

import React, { Component } from 'react';

import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />

            <AppRoutes></AppRoutes>

            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
