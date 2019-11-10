import React from 'react';

const Input = ({ label, ...rest }) => (
  <div style={styles.wrapper} className='custom-input'>
    <span style={styles.label} className='floating-label'>
      {label}
    </span>
    <input style={styles.input} {...rest} />
    <div style={styles.overlay}></div>
  </div>
);

export default Input;

const styles = {
  wrapper: {
    position: 'relative',
    marginTop: '32px',
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: '16px',
    transform: 'translate(0%, -50%)',
    transition: 'transform 350ms, font-size 350ms',
    fontSize: '16px',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  input: {
    height: '48px',
    outline: 'none',
    padding: '0 16px',
    border: '0',
    background: 'var(--dark)',
    color: 'var(--light)',
    caret: 'var(--light)',
    width: '100%',
    boxShadow: 'var(--shadow)',
    borderRadius: '4px',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'var(--elevation-1)',
    pointerEvents: 'none',
  },
};
