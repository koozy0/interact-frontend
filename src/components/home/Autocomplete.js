import React, { Component } from 'react';

import Spinner from '../Spinner';
import moment from 'moment';

export const AutcompleteListItem = ({ name, code, start, end, onSelect }) => {
  return (
    <li className='autocomplete-list-item' onClick={onSelect}>
      <span className='d-block'>{name}</span>
      <span className='d-block'># {code}</span>
      <span className='d-block'>Start: {start}</span>
      <span className='d-block'>End: {end}</span>
    </li>
  );
};

export class Autocomplete extends Component {
  formatTimestamp = timestamp =>
    moment(timestamp).format('ddd, DD-MM-YYYY, hh:mm:ss A');

  render() {
    const {
      suggestions = [],
      onChange,
      onSubmit,
      onSelect,
      isLoading,
    } = this.props;

    const suggestionsList = (
      <ul
        className='autocomplete-list'
        style={this.focus ? { display: 'block' } : { display: 'hidden' }}>
        {suggestions.map(suggestion => {
          const { _id, name, code, start: _start, end: _end } = suggestion;
          const start = this.formatTimestamp(_start);
          const end = this.formatTimestamp(_end);
          const props = { name, code, start, end };

          return (
            <AutcompleteListItem
              {...props}
              key={_id}
              onSelect={() => onSelect(suggestion)}
            />
          );
        })}
      </ul>
    );

    return (
      <form className='autocomplete-form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='enter code here...'
          className='autocomplete-input'
          style={styles.input}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <div style={styles.inputOverlay}></div>
        <button
          style={{
            ...styles.searchButton,
            ...(isLoading && styles.searchButtonIsLoading),
          }}>
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
    overflow: 'hidden',
    borderRadius: '32px',
  },
  input: {
    width: '100%',
    padding: '16px 48px',
    borderRadius: '32px',
    outline: 'none',
    border: '0',
    lineHeight: '24px',
    fontSize: '14px',
    boxShadow: 'var(--shadow)',
    background: 'var(--dark)',
    position: 'relative',
    caret: 'var(--light)',
    color: 'var(--light)',
  },
  inputOverlay: {
    borderRadius: '32px',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: 100,
    pointerEvents: 'none',
    background: 'var(--elevation-1)',
  },
  searchButton: {
    background: 'var(--primary)',
    border: '0',
    padding: '0',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    position: 'absolute',
    right: '16px',
    top: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--light)',
  },
  searchButtonIsLoading: {
    background: 'transparent',
  },
};
