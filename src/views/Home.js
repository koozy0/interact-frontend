import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div style={styles.home}>
        <div style={styles.formWrapper}>
          <form style={styles.form}>
            <input type='text' style={styles.input} />
            <Link to='/event' style={styles.searchSubmit}>
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
  },
  formWrapper: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    position: 'relative',
  },
  input: {
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
  searchSubmit: {
    position: 'absolute',
    right: '16px',
    height: '36px',
    width: '36px',
    borderRadius: '18px',
    top: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41EAD4',
  },
};
