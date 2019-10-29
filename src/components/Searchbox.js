import { Link } from 'react-router-dom';
import React from 'react';

const Searchbox = ({ onInputChange }) => (
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
      onChange={onInputChange}
    />
    <Link
      to='/events'
      style={{
        ...styles.searchboxAside,
        ...styles.searchboxAsideRight,
      }}
    >
      <i className='material-icons'>arrow_forward</i>
    </Link>
  </form>
);

export default Searchbox;

const styles = {
  searchbox: {
    width: '100%',
    padding: '16px 48px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '0',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.87)',
    outline: 'none',
    lineHeight: '24px',
    backgroundColor: 'var(--light)',
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
    color: 'var(--dark)',
    fontSize: '16px',
  },
  searchboxAsideRight: {
    right: '16px',
    top: '10px',
    backgroundColor: 'var(--primary)',
  },
};
