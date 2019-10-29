import React from 'react';

export default function EventItem({
  name,
  code,
  start,
  end,
  createdAt,
  createdBy,
}) {
  return (
    <div style={styles.item}>
      <p>Event name: {name}</p>
      <p>Event code: {code}</p>
      <p>Event start: {start}</p>
      <p>Event end: {end}</p>
      <p>Created at: {createdAt}</p>
      <p>
        Created by: {createdBy.username} - {createdBy.name}
      </p>
    </div>
  );
}

const styles = {
  item: {
    marginBottom: '16px',
  },
};
