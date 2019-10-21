import React, { Component } from 'react';
import Question from './Question';

export class Event extends Component {
  render() {
    return (
      <div className='container'>
        <div style={styles.section}>
          <section>
            <div style={styles.subheaderWrapper}>
              <p>Ask the speaker</p>
            </div>
            <div style={styles.textareaWrapper}>
              <div style={styles.textareaIcon}>
                <i className='material-icons'>add_comment</i>
              </div>
              <textarea
                style={styles.textarea}
                rows='1'
                placeholder='Type your question'
              />
            </div>
          </section>

          <section style={{ marginTop: '12px' }}>
            <div style={styles.subheaderWrapper}>
              <p>5 questions</p>
              <div style={styles.spacer} />
              <select style={styles.select}>
                <option style={styles.option} selected>
                  Popular
                </option>
                <option style={styles.option}>Created</option>
              </select>
            </div>

            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </section>
        </div>
      </div>
    );
  }
}

export default Event;

const styles = {
  section: {
    margin: '0 auto',
    maxWidth: '50em',
    width: '100%',
  },
  textareaWrapper: { position: 'relative' },
  textareaIcon: {
    alignItems: 'center',
    color: '#41EAD4',
    display: 'flex',
    height: '36px',
    justifyContent: 'center',
    left: '12px',
    position: 'absolute',
    top: '16px',
    width: '36px',
  },
  textarea: {
    border: '0',
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '24px',
    outline: 'none',
    padding: '20px 60px',
    resize: 'none',
    width: '100%',
    marginBottom: '-6px',
  },
  subheaderWrapper: {
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
  },
  spacer: {
    flex: '1',
  },
  select: {
    outline: 'none',
    border: '0',
    padding: '4px',
    backgroundColor: 'transparent',
    color: 'inherit',
  },
  option: {
    color: '#3a3335',
  },
};
