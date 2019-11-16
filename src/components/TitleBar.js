import React from 'react';

const TitleBar = ({ children }) => {
  return <div style={styles.titleBar}>{children}</div>;
};
export default TitleBar;

const styles = {
  titleBar: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
};
