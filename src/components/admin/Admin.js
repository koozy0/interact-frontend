import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';

class Admin extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className='container'>
        <h1 style={styles.header}>Admin</h1>
        <p style={styles.msg}>Welcome {this.props.user.name}.</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <Link to='/events/manage'>Manage Events</Link>
          </li>
          <li style={styles.listItem}>
            <Link to='/events/create'>Create Event</Link>
          </li>
          <li style={styles.listItem}>
            <Link to='/' onClick={this.logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

const styles = {
  header: {
    padding: '0 16px',
  },
  msg: {
    padding: '4px 16px',
    fontSize: '16px',
  },
  list: {
    margin: '16px',
  },
  listItem: {
    textDecoration: 'underline',
    padding: '4px 16px',
    fontSize: '16px',
  },
};
