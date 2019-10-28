import React from 'react';

export default function Alert({ msg }) {
  return (
    <div style={styles.wrapper}>
      <p>{msg}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '12px 16px',
  },
};
