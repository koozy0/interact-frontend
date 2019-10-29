import React, { Component, Fragment } from 'react';
import {
  clearEvents,
  clearSelected,
  getEvent,
  searchEvents,
} from '../actions/event';

import Alert from './Alert';
import Autocomplete from './Autocomplete';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    // Clear selected Event
    this.props.clearSelected();
  }

  componentDidUpdate() {
    const { isLoading, selected } = this.props.event;

    if (!isLoading && selected) {
      this.props.history.push(`/events/${selected.code}`);
    }
  }

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
    this.props.getEvent(searchTerm);
  };

  onSelect = suggestion => {
    const { code } = suggestion;
    // get event
    this.props.getEvent(code);
  };

  clearEventsOnSelect = () => {
    this.props.clearEvents();
  };

  render() {
    const { events, isLoading } = this.props.event;
    const errMsg = this.props.error.data.msg || '';

    return (
      <Fragment>
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

        <div style={styles.errorWrapper}>
          <Alert msg={errMsg} color='danger' visible={errMsg.length > 0} />
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = {
  clearEvents: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
  searchEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
  error: state.error,
});

const mapDispatchToProps = {
  clearEvents,
  clearSelected,
  getEvent,
  searchEvents,
};

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
  errorWrapper: {
    position: 'fixed',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};
