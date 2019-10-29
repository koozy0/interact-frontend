import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getEvents } from '../../actions/event';

class ManageEvent extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div className='container'>
        <h1 style={styles.header}>Manage Events</h1>
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
};
