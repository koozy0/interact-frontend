import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteErrors } from '../../actions/error';
import { userLogout } from '../../actions/user';

class Admin extends Component {
  componentDidMount() {
    // Clear errors
    this.props.deleteErrors();
  }

  logout = () => {
    this.props.userLogout();
  };

  render() {
    return (
      <div className='container'>
        <div className='content'>
          <h1 className='mb-3'>Admin</h1>

          <p>Welcome {this.props.user.name}</p>

          <ul>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  userLogout,
  deleteErrors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

const styles = {
  listItem: {
    textDecoration: 'underline',
    padding: '4px 8px',
    fontSize: '16px',
  },
};
