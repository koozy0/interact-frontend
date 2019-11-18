import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

export default function EventItem({
  name,
  code,
  start,
  end,
  createdAt,
  createdBy,
}) {
  return (
    <div style={styles.item} className='z-elevate-1'>
      <div style={styles.heading}>
        <div className='mb-3'>
          <h3>{name}</h3>
          <p>#{code}</p>
        </div>
        <Link style={styles.manage} title='Work in progress'>
          <i className='material-icons mr-2' style={styles.link}>
            list
          </i>
          Manage
        </Link>
      </div>
      <table style={styles.table}>
        <colgroup>
          <col className='w-25' />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th style={styles.cell}>Start date</th>
            <td style={styles.cell}>
              {moment(start).format('MMM D YYYY, hh:mm:ss Z')}
            </td>
          </tr>
          <tr>
            <th style={{ ...styles.cell, ...styles.th }}>End date</th>
            <td style={styles.cell}>
              {moment(end).format('MMM D YYYY, hh:mm:ss Z')}
            </td>
          </tr>
          <tr>
            <th style={{ ...styles.cell, ...styles.th }}>Created at</th>
            <td style={styles.cell}>
              {moment(createdAt).format('MMM D YYYY, hh:mm:ss Z')}
            </td>
          </tr>
          <tr>
            <th style={{ ...styles.cell, ...styles.th }}>Created by</th>
            <td style={styles.cell}>{createdBy.username}</td>
          </tr>
        </tbody>
      </table>
      {/* <div className='mb-3'>
        <p>Start: {moment(start).format('MMM D YYYY, hh:mm:ss')}</p>
        <p>End: {moment(end).format('MMM D YYYY, hh:mm:ss')}</p>
      </div>
      <div>
        <p>Created At: {moment(createdAt).format('MMM D YYYY, hh:mm:ss')}</p>
        <p>Created By: {createdBy.username}</p>
      </div> */}
    </div>
  );
}

const styles = {
  item: {
    marginBottom: '4px',
    borderRadius: '4px',
    padding: '16px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
  },
  manage: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '64px',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    textAlign: 'left',
    tableLayout: 'fixed',
  },
  cell: {
    padding: '4px 16px',
    height: '48px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
  },
  th: {
    fontWeight: '500',
  },
};
