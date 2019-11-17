import React, { useState } from 'react';

import Button from '../Button';
import Spinner from '../Spinner';
import TitleBar from '../TitleBar';

const QuestionForm = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState({
    question: '',
    author: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section>
      <TitleBar>
        <span>Ask the speaker</span>
      </TitleBar>

      <div style={styles.formWrapper} className='z-elevate-1'>
        <form
          className='question-form'
          onSubmit={onSubmit(form.question, form.author)}
        >
          <div style={{ ...styles.flexContainer, ...styles.questionContainer }}>
            <i style={styles.icon} className='material-icons mr-3'>
              insert_comment
            </i>
            <input
              style={styles.input}
              name='question'
              placeholder='Type your question'
              onChange={onChange}
            ></input>
          </div>
          <div style={styles.divider}></div>
          <div style={{ ...styles.flexContainer, ...styles.authorContainer }}>
            <i style={styles.icon} className='material-icons mr-3'>
              person
            </i>
            <input
              style={styles.input}
              name='author'
              placeholder='Your name (optional)'
              onChange={onChange}
            ></input>
            {isLoading ? <Spinner /> : <Button>Ask!</Button>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;

const styles = {
  formWrapper: {
    borderRadius: '4px',
  },
  input: {
    outline: 'none',
    border: '0',
    color: 'var(--light)',
    background: 'transparent',
    flex: '1',
    height: '40px',
  },
  flexContainer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: '0 16px',
  },
  questionContainer: {
    height: '96px',
  },
  authorContainer: {
    height: '64px',
  },
  divider: {
    height: '1px',
    borderTop: '1px solid rgba(255, 255, 255, 0.10)',
    position: 'absolute',
    width: '100%',
  },
};
