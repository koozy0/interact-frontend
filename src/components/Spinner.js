import React from 'react';

const Spinner = () => {
  return (
    <svg
      className='spinner'
      width='36px'
      height='36px'
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        className='path'
        fill='none'
        strokeWidth='6'
        strokeLinecap='round'
        cx='33'
        cy='33'
        r='30'
      ></circle>
    </svg>
  );
};

export default Spinner;
