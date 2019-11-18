import React, { Component } from 'react';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event';

class CreateEvent extends Component {
  state = {
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
    this.props.createEvent(payload);
    this.setState({
      name: '',
      code: '',
      start: '',
      end: '',
    });
  };

  render() {
    const isCreated = this.props.event.newEvent;

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
            {this.props.error.message.length > 0 && (
              <Alert msg={this.props.error.message} color='danger' />
            )}
            {isCreated && <Alert msg='Event created.' color='success' />}

            <Input
              type='text'
              name='name'
              label='Event Name'
              value={this.state.name}
              onChange={this.onChange}
            />

            <Input
              type='text'
              name='code'
              label='Event Code'
              value={this.state.code}
              onChange={this.onChange}
            />

            <Input
              inputType='datetime'
              name='start'
              label='Event Start'
              value={this.state.start}
              onChange={this.onChange}
            />

            <Input
              inputType='datetime'
              name='end'
              label='Event End'
              value={this.state.end}
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
