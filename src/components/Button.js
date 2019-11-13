import React from 'react';

const Button = ({ children, ...rest }) => (
  <button style={styles.button} {...rest}>
    <span style={styles.label}>{children}</span>
    <div style={styles.label}></div>
  </button>
);

export default Button;

const styles = {
  button: {
    position: 'relative',
    height: '40px',
    border: '0',
    outline: 'none',
    padding: '0 16px',
    minWidth: '64px',
    background: 'var(--primary)',
    boxShadow: 'var(--shadow-2)',
    borderRadius: '4px',
  },
  label: {
    fontSize: '16px',
    userSelect: 'none',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
};
