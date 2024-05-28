import React from 'react';

const ArrowButton = ({ direction, onClick }) => {
  const arrowIcon = direction === 'left' ? '←' : '→';

  return (
    <button onClick={onClick} className={`absolute top-1/4 transform -translate-y-1/4 mx-48 ${direction === 'left' ? 'left-0' : 'right-0'}`}>
      {arrowIcon}
    </button>
  );
};

export default ArrowButton;

