import React, { Component } from 'react';
import { clearEvents, searchEvents } from '../actions/event';

import Autocomplete from './Autocomplete';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    searchTerm: '',
  };

  // TODO: debounce the onChange event handler to prevent excessive requests
  onChange = e => {
    const searchTerm = e.currentTarget.value;

    // Cancel the previous request
    if (typeof this._source !== typeof undefined) {
      this._source.cancel('Operation cancelled due to new request');
    }

    // Save the new request for cancellation
    this._source = axios.CancelToken.source();

    // Only make new requests when search term is > 3 chars long
    if (searchTerm.length > 3) {
      this.props.searchEvents(searchTerm, this._source.token);
    } else {
      this.props.clearEvents();
    }

    this.setState({ searchTerm });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.clearEvents();
    const { searchTerm } = this.state;
    // get event
    // if event is found change page else show error
    this.props.history.push(`/events/${searchTerm}`);
  };

  onSelect = suggestion => {
    console.log(suggestion);
  };

  clearEventsOnSelect = () => {
    this.props.clearEvents();
  };

  render() {
    const { events, isLoading } = this.props.event;

    return (
      <div style={styles.home}>
        <div style={styles.formWrapper}>
          <Autocomplete
            suggestions={events}
            isLoading={isLoading}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onSelect={this.onSelect}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  clearEvents: PropTypes.func.isRequired,
  searchEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = { clearEvents, searchEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = {
  home: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    padding: '0 32px',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    position: 'relative',
  },
  autocompleteWrapper: {
    listStyleType: 'none',
    padding: '0',
    position: 'absolute',
    width: '100%',
    maxHeight: '104px',
    overflow: 'auto',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '4px',
    marginBottom: '0',
    boxShadow: 'rgba(0, 0, 0, 0.54) 0px 2px 5px 0px',
  },
};
