import React, { Component } from 'react';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteErrors } from '../../actions/error';
import { userLogin } from '../../actions/user';

class LoginAdmin extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    // Clear errors
    this.props.deleteErrors();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.userLogin({ username, password });
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/admin');
    }
  }

  render() {
    const { data: err } = this.props.error;
    const errMsg = err.message || (err.data && err.data.message) || '';

    return (
      <div className='container'>
        <div className='content'>
          <h1 className='mb-3'>Login Admin</h1>

          <form autoComplete='off' onSubmit={this.onSubmit}>
            {errMsg.length > 0 && <Alert msg={errMsg} color='danger' />}

            <Input
              type='text'
              name='username'
              label='Username'
              onChange={this.onChange}
            />

            <Input
              type='password'
              name='password'
              label='Password'
              onChange={this.onChange}
            />

            <Link to='/admin/create' style={styles.link} className='mt-3 mr-3'>
              Create
            </Link>

            <Button type='submit' className='mt-3'>
              Login
            </Button>
          </form>
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

const mapDispatchToProps = { deleteErrors, userLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginAdmin);

const styles = {
  link: {
    lineHeight: '40px',
    padding: '0 16px',
    height: '40px',
    display: 'inline-block',
    minWidth: '64px',
    alignItems: 'flex-start',
    fontSize: '16px',
  },
};
