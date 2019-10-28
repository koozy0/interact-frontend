import { Link } from 'react-router-dom';
import React from 'react';

const AutocompleteItem = ({ name, code, clearEventsOnSelect }) => (
  <li
    className='on-hover-highlight'
    style={styles.autocompleteItem}
    onClick={clearEventsOnSelect}
  >
    <Link to={`/events/${code}`} style={styles.link}>
      {name} - #{code}
    </Link>
  </li>
);

export default AutocompleteItem;

const styles = {
  autocompleteItem: {
    height: '52px',
    cursor: 'pointer',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 48px',
    height: '100%',
  },
};
