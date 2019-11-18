import React, { Component } from 'react';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user';
import { deleteErrors } from '../../actions/error';

class CreateAdmin extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    email: '',
    role: 'administrator',
    secret: '',
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
    const { username, password, name, email, role, secret } = this.state;
    this.props.createUser({ username, password, name, email, role, secret });
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/admin');
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='content'>
          <h1 className='mb-3'>Create Admin</h1>

          <form autoComplete='off' onSubmit={this.onSubmit}>
            {this.props.error.message.length > 0 && (
              <Alert msg={this.props.error.message} color='danger' />
            )}

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

            <Input
              type='text'
              name='name'
              label='Name'
              onChange={this.onChange}
            />

            <Input
              type='email'
              name='email'
              label='Email'
              onChange={this.onChange}
            />

            <Input
              type='text'
              name='secret'
              label='Secret'
              onChange={this.onChange}
            />

            <Link to='/admin/login' style={styles.link} className='mt-3 mr-3'>
              Login
            </Link>

            <Button type='submit' className='mt-3'>
              Create
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

const mapDispatchToProps = {
  deleteErrors,
  createUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAdmin);

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
