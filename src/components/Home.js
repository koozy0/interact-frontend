import React, { Component } from 'react';
import { clearEvents, getEvents, searchEvents } from '../actions/event';

import AutocompleteItem from './AutocompleteItem';
import PropTypes from 'prop-types';
import Searchbox from './Searchbox';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  // TODO: debounce the onChange event handler to prevent excessive requests
  onInputChange = e => {
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
  };

  clearEventsOnSelect = () => {
    this.props.clearEvents();
  };

  render() {
    const { events } = this.props.event;

    return (
      <div style={styles.home}>
        <div style={styles.formWrapper}>
          <Searchbox onInputChange={this.onInputChange} />
          <ul style={styles.autocompleteWrapper}>
            {events.map(evt => (
              <AutocompleteItem
                key={evt._id}
                name={evt.name}
                code={evt.code}
                clearEventsOnSelect={this.clearEventsOnSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  clearEvents: PropTypes.func.isRequired,
  getEvents: PropTypes.func.isRequired,
  searchEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = { clearEvents, getEvents, searchEvents };

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
    padding: '0 16px',
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
