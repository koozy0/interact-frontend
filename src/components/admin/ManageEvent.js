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
        <div className='content'>
          <div style={styles.heading} className='mb-3'>
            <h1>Manage Events</h1>

            <Link to='/admin' className='btn btn-primary'>
              Back
            </Link>
          </div>

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
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
