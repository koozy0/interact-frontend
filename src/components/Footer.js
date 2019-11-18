import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p>
        Created by:{' '}
        <a href='https://github.com/koozy0' style={styles.githubLink}>
          Koo Zheng Yu
        </a>
      </p>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 20px',
    color: 'rgba(255, 255, 255, 0.2)',
  },
  githubLink: {
    textDecoration: 'underline',
  },
};
