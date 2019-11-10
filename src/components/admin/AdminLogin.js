import React, { Component } from 'react';

import Alert from '../Alert';
import { deleteErrors } from '../../actions/error';
import { connect } from 'react-redux';
import {} from '../../actions/user';
import Button from '../Button';
import Input from '../Input';

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

              <div className='input-grp'>
                <Input
                  type='text'
                  id='username'
                  name='username'
                  label='Username'
                  autoComplete='off'
                  onChange={this.onChange}
                />
              </div>

              <div className='input-grp'>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  label='Password'
                  autoComplete='off'
                  onChange={this.onChange}
                />
              </div>

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
