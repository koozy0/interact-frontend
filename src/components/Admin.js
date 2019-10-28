import React, { Component } from 'react';

export class Admin extends Component {
  state = {
    username: '',
    password: '',
    msg: null,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <h1 style={styles.header}>Admin Login</h1>
        <form style={styles.form} onSubmit={this.onSubmit}>
          <div style={styles.inputGrp}>
            <label for='username' style={styles.label}>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              autocomplete='off'
              onChange={this.onChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGrp}>
            <label for='password' style={styles.label}>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              autocomplete='off'
              onChange={this.onChange}
              style={styles.input}
            />
          </div>

          <button type='submit' style={styles.login}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Admin;

const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  form: {
    width: '100%',
    maxWidth: '30em',
    margin: '0 auto',
  },
  inputGrp: {
    marginBottom: '32px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    fontSize: '20px',
  },
  input: {
    padding: '12px 16px',
    width: '100%',
    border: '0',
    borderRadius: '4px',
  },
  login: {
    padding: '12px 16px',
    fontWeight: '600',
    borderRadius: '32px',
    border: '0',
    display: 'block',
    width: '100%',
    backgroundColor: '#41EAD4',
    color: '#3a3335',
    cursor: 'pointer',
    marginTop: '64px',
    outline: 'none',
  },
};
