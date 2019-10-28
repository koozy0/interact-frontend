import React from 'react';

const NotFound = () => (
  <div style={styles.wrapper}>
    <p style={{ ...styles.errorCode, ...styles.textCenter }}>404</p>
    <p style={{ ...styles.errorMsg, ...styles.textCenter }}>Page Not Found</p>
  </div>
);

export default NotFound;

const styles = {
  wrapper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  errorCode: {
    fontSize: '128px',
  },
  errorMsg: {
    fontSize: '28px',
  },
  textCenter: {
    textAlign: 'center',
  },
};
