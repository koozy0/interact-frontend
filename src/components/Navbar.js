import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Link to='/'>
          <i className='material-icons' style={styles.link}>
            home
          </i>
        </Link>
        <div style={styles.spacer} />
        <span style={styles.title}>interact</span>
        <div style={styles.spacer} />
        <Link to='/admin'>
          <i className='material-icons' style={styles.link}>
            person
          </i>
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

const styles = {
  navbar: {
    alignItems: 'center',
    color: 'var(--light)',
    display: 'flex',
    height: '64px',
    justifyContent: 'center',
    padding: '5px 20px',
    position: 'sticky',
    top: '0',
    width: '100%',
    zIndex: '100',
  },
  spacer: { flex: '1' },
  link: {
    alignItems: 'center',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    width: '50px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    color: 'var(--primary)',
  },
};
