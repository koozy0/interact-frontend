import React from 'react';

export default function Alert({ msg = '' }) {
  return (
    <div style={{ ...styles.wrapper, ...(msg.length === 0 && styles.hidden) }}>
      <p style={styles.msg}>{msg}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '12px 16px',
    backgroundColor: 'var(--danger)',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  msg: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  hidden: {
    display: 'none',
  },
};
