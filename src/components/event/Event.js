import React, { Component } from 'react';
import { createQuestion, fetchQuestions } from '../../actions/question';

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event';

export class Event extends Component {
  state = {
    author: '',
    question: '',
    sortBy: 'popular',
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;
    // fetch questions
    this.props.fetchQuestions(eventId);
    // open socket connection here
    // join room for the event
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (question, author) => e => {
    e.preventDefault();
    const { eventId } = this.props.match.params;
    this.props.createQuestion(eventId, { author, question });

    // emit a message to room to notify subscribers that a new question has been created
  };

  render() {
    const { questions } = this.props.question;

    return (
      <div className='container'>
        <div style={styles.section}>
          <QuestionForm
            onSubmit={this.onSubmit}
            isLoading={this.props.event.isLoading}
          />

          <QuestionList questions={questions} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  question: state.question,
});

const mapDispatchToProps = {
  createQuestion,
  fetchEvent,
  fetchQuestions,
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
    left: '20px',
    position: 'absolute',
    top: '20px',
    width: '36px',
  },
  textarea: {
    border: '0',
    borderRadius: '4px',
    fontSize: 'inherit',
    lineHeight: '24px',
    outline: 'none',
    padding: '24px 60px',
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
