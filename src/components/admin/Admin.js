import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Admin</h1>
        <ul>
          <li>
            <Link to='/events/manage'>Manage Events</Link>
          </li>
          <li>
            <Link to='/events/create'>Create Events</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Admin;
