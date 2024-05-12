import React, { useState } from 'react';


const Card = ({ question, answer, onPreviousCard, onNextCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
   
    <div className="box-content h-72 w-96 p-4 max-w-md mx-auto bg-gray-100 shadow-md rounded-md overflow-hidden" onClick={flipCard}>
    {/* Front of the card - question */}
    <div className={`p-4 flex items-center justify-center h-full ${isFlipped ? 'hidden' : ''}`}>
      <div className="text-gray-700 font-semibold text-lg overflow-hidden">
        <div className="p-4 rounded-md">
          <p className='m-0'>{question}</p>
        </div>
      </div>
    </div>

    {/* Back of the card - answer */}
    <div className={`p-4 flex items-center justify-center h-full ${isFlipped ? '' : 'hidden'}`}>
      <div className="text-gray-700 font-semibold text-lg">
        <div className="p-4 rounded-md">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Card;