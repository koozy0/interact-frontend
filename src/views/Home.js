import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div style={styles.home}>
        <div style={styles.formWrapper}>
          <form style={styles.form}>
            <div
              style={{
                ...styles.searchboxAside,
                ...styles.searchboxAsideLeft,
              }}
            >
              #
            </div>
            <input
              type='text'
              style={styles.searchbox}
              placeholder='enter code here'
            />
            <Link
              to='/event'
              style={{
                ...styles.searchboxAside,
                ...styles.searchboxAsideRight,
              }}
            >
              <i className='material-icons'>arrow_forward</i>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;

const styles = {
  home: {
    flex: '1',
    marginTop: '45vh',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    position: 'relative',
  },
  searchbox: {
    width: '100%',
    padding: '16px 48px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '0',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.87)',
    outline: 'none',
    lineHeight: '24px',
    backgroundColor: '#FAFAFF',
  },
  searchboxAside: {
    height: '36px',
    width: '36px',
    position: 'absolute',
    borderRadius: '18px',
    top: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchboxAsideLeft: {
    left: '16px',
    top: '10px',
    color: '#3a3335',
    fontSize: '16px',
  },
  searchboxAsideRight: {
    right: '16px',
    top: '10px',
    backgroundColor: '#41EAD4',
  },
};
