import {} from '../../actions/user';

import React, { Component } from 'react';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import { connect } from 'react-redux';
import { deleteErrors } from '../../actions/error';

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
    console.log({ username, password });
    // this.props.login({ username, password });
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
    const errMsg = this.props.error.data.msg || '';

    return (
      <div className='container'>
        <div className='content'>
          <div style={styles.wrapper}>
            <h1 className='mb-3'>Admin Login</h1>

            <form onSubmit={this.onSubmit}>
              <Alert msg={errMsg} color='danger' visible={errMsg.length > 0} />

              <Input
                type='text'
                id='username'
                name='username'
                label='Username'
                value={this.state.username}
                autoComplete='new-password'
                onChange={this.onChange}
              />

              <Input
                type='password'
                id='password'
                name='password'
                label='Password'
                value={this.state.password}
                autoComplete='new-password'
                onChange={this.onChange}
              />

              <Button label='Login' type='submit' />
              {/* <button type='submit' className='btn btn-primary w-100 mt-3'>
                Login
              </button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isAdmin: state.user.isAdmin,
  error: state.error,
});

const mapDispatchToProps = { deleteErrors };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminLogin);

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '30em',
    margin: '0 auto',
  },
};
