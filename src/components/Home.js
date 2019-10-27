import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../actions/event';

class Home extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  onChange = e => {
    const searchTerm = e.currentTarget.value;

    if (searchTerm.length > 3) {
      console.log(searchTerm);
    }
  };

  render() {
    const { events } = this.props.event;
    console.log(events);

    return (
      <div style={styles.home}>
        <div style={styles.formWrapper}>
          <form style={styles.form}>
            <div
              style={{
                ...styles.searchboxAside,
                ...styles.searchboxAsideLeft,
              }}
            >
              #
            </div>
            <input
              type='text'
              style={styles.searchbox}
              placeholder='enter code here'
              onChange={this.onChange}
            />
            <Link
              to='/event'
              style={{
                ...styles.searchboxAside,
                ...styles.searchboxAsideRight,
              }}
            >
              <i className='material-icons'>arrow_forward</i>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = { getEvents };

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
  searchbox: {
    width: '100%',
    padding: '16px 48px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '0',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.87)',
    outline: 'none',
    lineHeight: '24px',
    backgroundColor: '#FAFAFF',
  },
  searchboxAside: {
    height: '36px',
    width: '36px',
    position: 'absolute',
    borderRadius: '18px',
    top: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchboxAsideLeft: {
    left: '16px',
    top: '10px',
    color: '#3a3335',
    fontSize: '16px',
  },
  searchboxAsideRight: {
    right: '16px',
    top: '10px',
    backgroundColor: '#41EAD4',
  },
};
