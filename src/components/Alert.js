import React from 'react';

export default function Alert({
  msg = '',
  color = 'primary',
  visible = false,
}) {
  return (
    <div
      style={{
        ...styles.wrapper,
        ...(visible && styles.visible),
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
    display: 'none',
  },
  msg: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  visible: {
    display: 'block',
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
