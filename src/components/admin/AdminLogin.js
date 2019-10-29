import React, { Component } from 'react';

import Alert from '../Alert';
import { clearErrors } from '../../actions/error';
import { connect } from 'react-redux';
import { login } from '../../actions/user';

class AdminLogin extends Component {
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
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated, isAdmin } = this.props;

    if (error !== prevProps.error) {
      // Check for login error
      if (error.id === 'LOGIN_FAILURE') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated && isAdmin) {
      this.props.history.push('/admin');
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 style={styles.header}>Admin Login</h1>
        <form style={styles.form} onSubmit={this.onSubmit}>
          <Alert msg={this.props.error.data.msg} />
          <div style={styles.inputGrp}>
            <label htmlFor='username' style={styles.label}>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              autoComplete='off'
              onChange={this.onChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGrp}>
            <label htmlFor='password' style={styles.label}>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='off'
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

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isAdmin: state.user.isAdmin,
  error: state.error,
});

const mapDispatchToProps = { login, clearErrors };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminLogin);

const styles = {
  header: {
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '30em',
    margin: '0 auto',
  },
  inputGrp: {
    marginBottom: '32px',
    marginTop: '16px',
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
    backgroundColor: 'var(--success)',
    color: 'var(--dark)',
    cursor: 'pointer',
    marginTop: '64px',
    outline: 'none',
  },
};
