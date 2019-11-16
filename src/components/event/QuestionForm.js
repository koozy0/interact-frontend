import React, { useState } from 'react';

import Button from '../Button';
import TitleBar from '../TitleBar';

const QuestionForm = ({ onSubmit }) => {
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

      <div>
        <form onSubmit={onSubmit(form.question, form.author)}>
          <div style={styles.flexContainer}>
            <input
              style={{
                ...styles.input,
                ...styles.question,
              }}
              name='question'
              placeholder='Type your question'
              onChange={onChange}
            ></input>
          </div>
          <div style={styles.flexContainer}>
            <input
              style={{
                ...styles.input,
                ...styles.author,
              }}
              name='author'
              placeholder='Your name (optional)'
              onChange={onChange}
            ></input>
            <Button>Ask!</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;

const styles = {
  input: {
    outline: 'none',
    border: '0',
    padding: '0 64px',
    borderRadius: '4px',
    background: 'rgb(30, 30, 30)',
  },
  question: {
    flex: '1',
    height: '64px',
  },
  flexContainer: {
    display: 'flex',
    marginBottom: '4px',
    position: 'relative',
  },
  author: {
    flex: '1',
    marginRight: '4px',
    height: '40px',
  },
};
