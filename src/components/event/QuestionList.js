import Question from './Question';
import React from 'react';
import TitleBar from '../TitleBar';

const QuestionList = ({ onChange }) => {
  return (
    <section>
      <TitleBar>
        <span>{} questions</span>
        <div style={styles.spacer}></div>
        <select style={styles.select} name='sortBy' onChange={onChange}>
          <option value='popularity'>Popular</option>
          <option value='createdAt'>Created</option>
        </select>
      </TitleBar>

      <div>questions goes here</div>
    </section>
  );
};

export default QuestionList;

const styles = {
  spacer: {
    flex: '1',
  },
};
