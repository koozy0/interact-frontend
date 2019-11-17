import Question from './Question';
import React from 'react';
import TitleBar from '../TitleBar';

const QuestionList = ({ onSortChange, questions }) => {
  return (
    <section>
      <TitleBar>
        <span>{questions.length} questions</span>
        <div style={styles.spacer}></div>
        <select style={styles.select} name='sortBy' onChange={onSortChange}>
          <option style={styles.option} value='popularity'>
            Popular
          </option>
          <option style={styles.option} value='createdAt'>
            Created
          </option>
        </select>
      </TitleBar>

      <div>
        {questions.map(question => (
          <Question key={question.id} question={question}>
            test
          </Question>
        ))}
      </div>
    </section>
  );
};

export default QuestionList;

const styles = {
  spacer: {
    flex: '1',
  },
  select: {
    background: 'inherit',
    padding: '8px 16px',
    outline: 'none',
    border: '0',
    color: 'inherit',
  },
  option: {
    color: 'var(--dark)',
  },
};
