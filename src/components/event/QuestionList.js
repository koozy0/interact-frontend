import React, { useState } from 'react';

import Question from './Question';
import TitleBar from '../TitleBar';

const QuestionList = ({ onChange, questions }) => {
  const [sortBy, setSortBy] = useState('');

  return (
    <section>
      <TitleBar>
        <span>{questions.length} questions</span>
        <div style={styles.spacer}></div>
        <select style={styles.select} name='sortBy' onChange={onChange}>
          <option value='popularity'>Popular</option>
          <option value='createdAt'>Created</option>
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
};
