import React, { Component } from 'react';

import Alert from '../Alert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event';

class CreateEvent extends Component {
  state = {
    createdBy: null,
    name: null,
    code: null,
    start: null,
    end: null,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const payload = { ...this.state, createdBy: this.props.user.id };
    this.props.createEvent(payload);
  };

  render() {
    const errMsg = this.props.error.data.msg || '';
    const isCreated = this.props.event.isCreated;

    return (
      <div className='container'>
        <div className='content'>
          <div style={styles.wrapper}>
            <div style={styles.heading} className='mb-3'>
              <h1>Create Event</h1>

              <Link to='/admin' className='btn btn-primary'>
                Back
              </Link>
            </div>

            <form onSubmit={this.onSubmit}>
              <Alert msg={errMsg} color='danger' visible={errMsg} />
              <Alert msg='Event Created!' color='success' visible={isCreated} />

              <div className='input-grp'>
                <label htmlFor='name'>Event Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  onChange={this.onChange}
                />
              </div>

              <div className='input-grp'>
                <label htmlFor='code'>Event Code</label>
                <input
                  id='code'
                  name='code'
                  type='text'
                  onChange={this.onChange}
                />
              </div>

              <div className='input-grp'>
                <label htmlFor='start'>Event Start</label>
                <input
                  id='start'
                  name='start'
                  type='datetime-local'
                  onChange={this.onChange}
                />
              </div>

              <div className='input-grp'>
                <label htmlFor='end'>Event End</label>
                <input
                  id='end'
                  name='end'
                  type='datetime-local'
                  onChange={this.onChange}
                />
              </div>

              <button type='submit' className='btn btn-primary w-100 mt-3'>
                Create Event
              </button>
            </form>
          </div>
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
  wrapper: {
    width: '100%',
    maxWidth: '30em',
    margin: '0 auto',
  },
};
