import React, { Component } from 'react';

import EventItem from './EventItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';

class ManageEvent extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props.event;

    return (
      <div className='container'>
        <h1 style={styles.header}>Manage Events</h1>
        <div style={styles.wrapper}>
          <Link to='/admin' className='btn btn-primary mb-3'>
            Back
          </Link>
          {events.map(evt => (
            <EventItem {...evt} key={evt._id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = { getEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageEvent);

const styles = {
  header: {
    padding: '0 16px',
  },
  wrapper: {
    padding: '0 16px',
  },
};
