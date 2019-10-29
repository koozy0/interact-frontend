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
          <div className='input-grp'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              autoComplete='off'
              onChange={this.onChange}
            />
          </div>

          <div className='input-grp'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='off'
              onChange={this.onChange}
            />
          </div>

          <button type='submit' className='btn btn-primary w-100 mt-3'>
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
};
