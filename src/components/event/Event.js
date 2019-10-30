import React, { Component } from 'react';
import { createQuestion, getEvent } from '../../actions/event';

import Question from './Question';
import { connect } from 'react-redux';

export class Event extends Component {
  state = {
    author: '',
    question: '',
    sortBy: 'popular',
  };

  componentDidMount() {
    if (!this.props.event.selected) {
      this.props.getEvent(this.props.match.params.eventCode);
    }

    // open socket connection here
    // join room for the event
    // if received message that new question has been created, fetch event again to get question data
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { author, question } = this.state;
    this.props.createQuestion(this.props.match.params.eventCode, {
      author,
      question,
    });

    // emit a message to room to notify subscribers that a new question has been created
  };

  render() {
    const { questions = [] } = this.props.event.selected || {};

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
              <form onSubmit={this.onSubmit} className='question-form'>
                <textarea
                  style={styles.textarea}
                  rows='1'
                  placeholder='Type your question'
                  name='question'
                  onChange={this.onChange}
                />
                <div className='question-form-footer'>
                  <input
                    type='text'
                    placeholder='Your name (optional)'
                    name='author'
                    style={styles.authorInput}
                    onChange={this.onChange}
                  />
                  <button type='submit' style={styles.askQuestionButton}>
                    Ask question
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section style={{ marginTop: '16px' }}>
            <div style={styles.subheaderWrapper}>
              <p>{questions.length} questions</p>
              <div style={styles.spacer} />
              <select
                style={styles.select}
                name='sortBy'
                onChange={this.onChange}
              >
                <option style={styles.option} value='popularity'>
                  Popular
                </option>
                <option style={styles.option} value='createdAt'>
                  Created
                </option>
              </select>
            </div>

            <div>
              {questions.map(question => (
                <Question key={question._id} {...question} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
});

const mapDispatchToProps = {
  getEvent,
  createQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

const styles = {
  section: {
    margin: '0 auto',
    maxWidth: '50em',
    width: '100%',
  },
  textareaWrapper: { position: 'relative' },
  textareaIcon: {
    alignItems: 'center',
    color: 'var(--primary)',
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
    padding: '8px 20px',
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
    color: 'var(--dark)',
  },
  authorInput: {
    height: '36px',
    border: '0',
    flex: '1',
    outline: 'none',
    padding: '0 60px',
  },
  askQuestionButton: {
    height: '36px',
    border: '0',
    outline: 'none',
    backgroundColor: 'var(--primary)',
    color: 'var(--dark)',
    padding: '0 16px',
  },
};
