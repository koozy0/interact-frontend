import React, { Component } from 'react';

import moment from 'moment';

const Question = ({ question }) => {
  const {
    author,
    question: _question,
    upvotes,
    downvotes,
    createdAt,
  } = question;

  return (
    <div style={styles.wrapper} className='z-elevate-1 mb-1'>
      <div style={styles.row}>
        <div style={styles.avatar}>
          <i className='material-icons m-3'>person</i>
        </div>
        <div style={{ ...styles.headings, ...styles.flexFill }}>
          <h3 style={styles.textTruncate}>{author}</h3>
          <span style={styles.textTruncate}>{createdAt}</span>
        </div>
        <div style={styles.votes}></div>
      </div>
      <div style={styles.row}>
        <div style={styles.question}>
          <p className='mx-3'>{_question}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;

const styles = {
  wrapper: {
    borderRadius: '4px',
    padding: '16px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  flexFill: {
    flex: '1',
  },
  textTruncate: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'block',
  },
  headings: {
    minWidth: '0',
  },
};
