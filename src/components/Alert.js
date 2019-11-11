import React from 'react';

export default function Alert({ msg = '', color = 'primary' }) {
  return (
    <div
      style={{
        ...styles.wrapper,
        ...styles[color],
      }}
    >
      <p style={styles.msg}>{msg}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '12px 16px',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  msg: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  primary: {
    backgroundColor: 'var(--primary)',
  },
  secondary: {
    backgroundColor: 'var(--secondary)',
  },
  success: {
    backgroundColor: 'var(--success)',
    color: 'var(--dark)',
  },
  danger: {
    backgroundColor: 'var(--danger)',
  },
  warn: {
    backgroundColor: 'var(--warn)',
    color: 'var(--dark)',
  },
};
