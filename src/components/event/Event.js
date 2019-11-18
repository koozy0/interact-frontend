import React, { Component } from 'react';
import {
  createQuestion,
  fetchQuestions,
  questionCreated,
} from '../../actions/question';

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { fetchEventById } from '../../actions/event';
import moment from 'moment';
import openSocket from 'socket.io-client';

export class Event extends Component {
  state = {
    sortBy: '',
  };

  componentDidMount() {
    if (!this.props.event.event) {
      this.props.fetchEventById(this.props.match.params.eventId);
    }
    // fetch questions
    this.props.fetchQuestions(this.props.match.params.eventId);
    // open socket connection here
    this.socket = openSocket('http://localhost:5000');
    // join the appropriate room
    this.socket.emit('join', this.props.match.params.eventId);
    // watch for create_question event
    this.socket.on('create_question', question => {
      this.props.questionCreated(question);
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  onSortChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (question, author) => e => {
    e.preventDefault();
    const { eventId } = this.props.match.params;
    this.props.createQuestion(eventId, { author, question });
  };

  render() {
    const { questions } = this.props.question;
    const { event } = this.props.event;

    return (
      <div className='container'>
        <div style={styles.section}>
          {event ? (
            <div className='z-elevate-1' style={styles.info}>
              <h2 className='mb-3'>Event Information</h2>
              <p>{event.name}</p>
              <p>
                {moment(event.start).format('MMM D YYYY, hh:mm A')} -{' '}
                {moment(event.end).format('MMM D YYYY, hh:mm A')}
              </p>
              <p>#{event.code}</p>
            </div>
          ) : null}

          <QuestionForm
            onSubmit={this.onSubmit}
            isLoading={this.props.event.isLoading}
          />

          <QuestionList
            questions={questions}
            onSortChange={this.onSortChange}
          />
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
  fetchQuestions,
  questionCreated,
  fetchEventById,
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
  info: {
    borderRadius: '4px',
    padding: '20px 40px',
  },
  textareaWrapper: {
    position: 'relative',
  },
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
