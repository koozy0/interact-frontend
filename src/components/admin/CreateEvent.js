import React, { Component } from 'react';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event';

class CreateEvent extends Component {
  state = {
    createdBy: '',
    name: '',
    code: '',
    start: '',
    end: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const payload = { ...this.state, createdBy: this.props.user.id };
    console.log(payload);
    // this.props.createEvent(payload);
  };

  render() {
    const { data: err } = this.props.error;
    const errMsg = err.message || (err.data && err.data.message) || '';
    const isCreated = this.props.event.isCreated;

    return (
      <div className='container'>
        <div className='content'>
          <div style={styles.heading} className='mb-3'>
            <h1>Create Event</h1>

            <Link to='/admin' style={styles.back}>
              <i className='material-icons' style={styles.link}>
                arrow_back
              </i>
              Back
            </Link>
          </div>

          <form onSubmit={this.onSubmit}>
            {errMsg.length > 0 && <Alert msg={errMsg} color='danger' />}
            {isCreated && <Alert msg='Event created.' color='success' />}

            <Input
              type='text'
              name='name'
              label='Event Name'
              onChange={this.onChange}
            />

            <Input
              type='text'
              name='code'
              label='Event Code'
              onChange={this.onChange}
            />

            <Input
              inputType='datetime'
              name='start'
              label='Event Start'
              onChange={this.onChange}
            />

            <Input
              inputType='datetime'
              name='end'
              label='Event End'
              onChange={this.onChange}
            />

            <Button type='submit' className='mt-3'>
              Create Event
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  event: state.event,
  user: state.user.user,
});

const mapDispatchToProps = { createEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '64px',
  },
};
