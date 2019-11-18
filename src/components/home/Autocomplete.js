import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import moment from 'moment';

export const AutcompleteListItem = ({ name, code, start, end, onSelect }) => {
  return (
    <li className='autocomplete-list-item' onClick={onSelect}>
      <span className='d-block'>{name}</span>
      <span className='d-block'># {code}</span>
      <span>
        {start} - {end}
      </span>
    </li>
  );
};

export class Autocomplete extends Component {
  formatTimestamp = timestamp =>
    moment(timestamp).format('DD/MM/YYYY, hh:mm A');

  render() {
    const { suggestions, onChange, onSubmit, isLoading } = this.props;

    const suggestionsList = (
      <ul
        className='autocomplete-list z-elevate-1'
        style={this.focus ? { display: 'block' } : { display: 'hidden' }}
      >
        {suggestions.map(suggestion => {
          const { _id, name, code, start: _start, end: _end } = suggestion;
          const start = this.formatTimestamp(_start);
          const end = this.formatTimestamp(_end);
          const props = { name, code, start, end };
          const datetime = new Date().toISOString();

          return (
            <Link
              to={datetime > _start && datetime < _end ? `/events/${_id}` : ''}
              key={_id}
            >
              <AutcompleteListItem {...props} />
            </Link>
          );
        })}
      </ul>
    );

    return (
      <form
        style={styles.form}
        className='autocomplete-form'
        onSubmit={onSubmit}
      >
        <div style={{ ...styles.searchAside, ...styles.searchAsideLeft }}>
          #
        </div>
        <input
          type='text'
          placeholder='enter code here...'
          className='autocomplete-input z-elevate-1'
          style={styles.input}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <button
          style={{
            ...styles.searchAside,
            ...styles.searchAsideRight,
            ...(isLoading && styles.searchButtonIsLoading),
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <i className='material-icons' style={styles.link}>
              arrow_forward
            </i>
          )}
        </button>
        {suggestionsList}
      </form>
    );
  }
}
export default Autocomplete;

const styles = {
  form: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '16px 48px',
    borderRadius: '32px',
    outline: 'none',
    border: '0',
    lineHeight: '24px',
    fontSize: '14px',
    position: 'relative',
    caret: 'var(--light)',
    color: 'var(--light)',
  },
  searchAside: {
    position: 'absolute',
    width: '36px',
    height: '36px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '100',
  },
  searchAsideLeft: {
    color: 'currentColor',
    left: '10px',
    textAlign: 'center',
    pointerEvents: 'none',
    lineHeight: '36px',
    fontSize: '20px',
  },
  searchAsideRight: {
    background: 'var(--primary)',
    border: '0',
    padding: '0',
    borderRadius: '50%',
    right: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--on-primary)',
    boxShadow: 'var(--shadow-7)',
  },
  searchButtonIsLoading: {
    background: 'transparent',
  },
};
