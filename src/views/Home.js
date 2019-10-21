import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div style={styles.home}>
        <form style={styles.form}>
          <input type='text' style={styles.input} />
        </form>
      </div>
    );
  }
}

export default Home;

const styles = {
  home: {
    flex: '1',
    marginTop: '45vh',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: '16px 48px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '0',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.87)',
    outline: 'none',
  },
};
