import React from 'react';
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
          <span style={styles.textTruncate}>
            {moment(createdAt).format('MMM D, YYYY')},&nbsp;
            {moment(createdAt).fromNow()}
          </span>
        </div>
        <div style={styles.votes}>
          <button style={{ ...styles.vote, ...styles.downvote }}>
            <span className='mr-3'>{downvotes}</span>
            <i className='material-icons'>thumb_down_alt</i>
          </button>
          <button style={{ ...styles.vote, ...styles.upvote }}>
            <i className='material-icons'>thumb_up_alt</i>
            <span className='ml-3'>{upvotes}</span>
          </button>
        </div>
      </div>
      <div style={styles.row} className='mt-3'>
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
  votes: {
    display: 'flex',
  },
  vote: {
    border: '1px solid rgba(255, 255, 255, .2)',
    padding: '0 16px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'inherit',
    color: 'inherit',
  },
  upvote: {
    borderTopRightRadius: '18px',
    borderBottomRightRadius: '18px',
  },
  downvote: {
    borderTopLeftRadius: '18px',
    borderBottomLeftRadius: '18px',
  },
};
