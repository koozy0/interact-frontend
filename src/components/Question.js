import React, { Component } from 'react';

export class Question extends Component {
  render() {
    return (
      <div style={styles.question}>
        <div style={styles.headerWrapper}>
          <div style={styles.avatarWrapper}>
            <i className='material-icons md-36' style={styles.avatar}>
              account_circle
            </i>
          </div>
          <div style={styles.titleWrapper}>
            <div style={styles.titles}>
              <p style={{ ...styles.title, ...styles.trucateText }}>
                Anonymous
              </p>
              <small style={{ ...styles.subtitle, ...styles.trucateText }}>
                {new Date()
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, '/')}
              </small>
            </div>
            <div style={styles.votes}>
              <button style={{ ...styles.socialIcon, ...styles.upvote }}>
                <span style={styles.voteCount}>0</span>
                <i className='material-icons md-18'>thumb_up</i>
              </button>
              <button style={{ ...styles.socialIcon, ...styles.downvote }}>
                <span style={styles.voteCount}>0</span>
                <i className='material-icons md-18'>thumb_down</i>
              </button>
            </div>
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
    gridTemplateAreas: "'header' 'content'",
    gridGap: '4px',
    padding: '20px',
    border: '1px solid #fafaff',
    borderRadius: '4px',
    marginBottom: '4px',
    overflow: 'auto',
  },
  headerWrapper: {
    gridArea: 'header',
    display: 'grid',
    gridTemplateAreas: "'avatar title'",
    gridTemplateColumns: '48px 1fr',
    gridGap: '20px',
  },
  content: {
    gridArea: 'content',
  },
  avatarWrapper: {
    gridArea: 'avatar',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    gridArea: 'title',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  titles: {
    flex: '1',
    padding: '8px 0',
    minWidth: '100px',
  },
  votes: {
    display: 'flex',
    padding: '8px 0',
  },
  trucateText: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  header: {
    fontSize: '16px',
    fontWeight: '500',
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
    padding: '6px 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    flex: '1',
    maxWidth: '100px',
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
