import React, { Component } from 'react';

import EventItem from './EventItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event';

class ManageEvent extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props.event;

    return (
      <div className='container'>
        <div className='content'>
          <div style={styles.heading} className='mb-3'>
            <h1>Manage Events</h1>

            <Link to='/admin' style={styles.back}>
              <i className='material-icons' style={styles.link}>
                arrow_back
              </i>
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

const mapDispatchToProps = {
  fetchEvents,
};

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
  back: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '64px',
  },
};
