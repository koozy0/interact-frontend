import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

export default Navbar;

const styles = {
  navbar: {
    alignItems: 'center',
    color: '#FAFAFF',
    display: 'flex',
    height: '64px',
    justifyContent: 'center',
    padding: '5px 20px',
    position: 'sticky',
    top: '0',
    width: '100%',
  },
  spacer: { flex: '1' },
  link: {
    alignItems: 'center',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    width: '50px',
  },
  title: { fontSize: '20px', fontWeight: '500', color: '#41EAD4' },
};
