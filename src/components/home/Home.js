import React, { Component, Fragment } from 'react';
import { fetchEventByCode, fetchEvents } from '../../actions/event';

import Alert from '../Alert';
import Autocomplete from './Autocomplete';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteErrors } from '../../actions/error';

const CancelToken = axios.CancelToken;

class Home extends Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    // Clear errors
    this.props.deleteErrors();
  }

  // TODO: debounce the onChange event handler to prevent excessive requests
  onChange = e => {
    const searchTerm = e.currentTarget.value;

    // Cancel the previous request if it is still pending
    if (this._cancel) {
      this._cancel('Request cancelled as there is a new request.');
    }

    // Create the cancel token used to cancel this request if required
    const cancelToken = new CancelToken(c => (this._cancel = c));

    // Only make new requests when search term is > 3 chars long
    if (searchTerm.length > 3) {
      this.props.fetchEvents(searchTerm, cancelToken);
    }

    this.setState({ searchTerm });
  };

  onSubmit = e => {
    e.preventDefault();
    // fetch event and redirect to event page if successful
    this.props.fetchEventByCode(this.state.searchTerm, this.props.history);
  };

  render() {
    const { events, isLoading } = this.props.event;

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
          {this.props.error.message.length > 0 && (
            <Alert msg={this.props.error.message} color='danger' />
          )}
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  deleteErrors: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
  error: state.error,
});

const mapDispatchToProps = {
  fetchEventByCode,
  fetchEvents,
  deleteErrors,
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
