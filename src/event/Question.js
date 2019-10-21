import React, { Component } from 'react';

export class Question extends Component {
  render() {
    return (
      <div style={styles.question}>
        <div style={styles.avatarWrapper}>
          <i className='material-icons md-48' style={styles.avatar}>
            account_circle
          </i>
        </div>
        <div style={styles.headingWrapper}>
          <div style={styles.heading}>
            <p style={styles.header}>Anonymous</p>
            <small>{Date.now()}</small>
          </div>
          <div style={styles.spacer} />
          <div style={styles.social}>
            <button style={{ ...styles.socialIcon, ...styles.upvote }}>
              <span style={styles.voteCount}>0</span>
              <i className='material-icons'>thumb_up</i>
            </button>
            <button style={{ ...styles.socialIcon, ...styles.downvote }}>
              <span style={styles.voteCount}>0</span>
              <i className='material-icons'>thumb_down</i>
            </button>
          </div>
        </div>
        <div style={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          laboriosam ut impedit a dicta. Atque labore et sunt, natus ipsam fugit
          hic sed temporibus accusamus, aut doloremque perferendis quasi odit.
        </div>
      </div>
    );
  }
}

export default Question;

const styles = {
  question: {
    display: 'grid',
    gridTemplateAreas: "'avatar heading' 'content content'",
    gridTemplateColumns: '48px 1fr',
    gridGap: '4px',
    padding: '20px',
    border: '1px solid #fafaff',
    borderRadius: '4px',
    marginBottom: '4px',
  },
  avatarWrapper: {
    gridArea: 'avatar',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingWrapper: {
    gridArea: 'heading',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: '16px',
    fontWeight: '500',
  },
  content: {
    gridArea: 'content',
  },
  spacer: {
    flex: '1',
  },
  social: {
    display: 'flex',
  },
  socialIcon: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: '1px solid rgba(255,255,255,0.54)',
    color: '#fafaff',
    padding: '4px 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  voteCount: {
    marginRight: '8px',
  },
  upvote: {
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
  },
  downvote: {
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px',
  },
};
