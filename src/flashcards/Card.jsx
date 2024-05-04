import React, { useState } from 'react';


const Card = ({ question, answer, onPreviousCard, onNextCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
   
    <div className="box-content h-200 w-120 p-4 max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden" onClick={flipCard}>
    {/* Front of the card - question */}
    <div className={`box-content h-200 w-120 p-4 flex items-center justify-center h-full ${isFlipped ? 'hidden' : ''}`}>
      <div className="text-gray-700 font-semibold text-lg">
        <div className="bg-gray-200 p-4 rounded-md">
          <p>{question}</p>
        </div>
      </div>
    </div>

    {/* Back of the card - answer */}
    <div className={`p-4 flex items-center justify-center h-full ${isFlipped ? '' : 'hidden'}`}>
      <div className="text-gray-700 font-semibold text-lg">
        <div className="bg-gray-200 p-4 rounded-md">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Card;