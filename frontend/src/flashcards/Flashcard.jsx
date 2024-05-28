import React, { useState } from 'react';

const flashcardData = [
];

const Flashcard = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const showNextCard = () => {
    setCurrentCard((currentCard + 1) % flashcardData.length);
    setShowingAnswer(false);
  };

  const toggleAnswer = () => {
    setShowingAnswer(!showingAnswer);
  };

  const showPreviousCard = () => {
    setCurrentCard((currentCard - 1 + flashcardData.length) % flashcardData.length);
    setShowingAnswer(false);
  };


  return (
    <div className="container mx-auto">
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      <div className="px-4 py-2 bg-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Flashcard</h2>
      </div>
      <div className="px-4 py-6">
        <div className="text-lg font-semibold text-gray-800">
          {flashcardData[currentCard].question}
        </div>
        <div className={`mt-4 text-sm text-gray-600 ${showingAnswer ? '' : 'hidden'}`}>
          {flashcardData[currentCard].answer}
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-200 absolute inset-x-0 bottom-0 flex justify-between">
        <button onClick={showPreviousCard} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          &larr; Previous
        </button>
        <button onClick={toggleAnswer} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          {showingAnswer ? 'Show Question' : 'Show Answer'}
        </button>
        <button onClick={showNextCard} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Next &rarr;
        </button>
      </div>
    </div>
  </div>
);
};

export default Flashcard;