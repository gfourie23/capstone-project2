/* import React from "react";
import { useReview } from "../context/ReviewContext";
import Card from "../flashcards/Card";

function Review() {
  const { reviewCards } = useReview();

  return (
    <div className="Review">
      <h2 className="text-3xl font-bold m-10">Review</h2>
      <div className="flex flex-col items-center">
        {reviewCards.length > 0 ? (
          reviewCards.map((card, index) => (
            <Card
              key={index}
              question={card.word}
              answer={card.translation}
              language={english}
            />
          ))
        ) : (
          <p className="mt-10">No cards to review. Add some words to your review list!</p>
        )}
      </div>
    </div>
  );
}

export default Review; */

import React from 'react';
import { useReview } from '../context/ReviewContext';
import Card from '../flashcards/Card';
import LanguageSelector from '../flashcards/LanguageSelector';
import ArrowButton from './ArrowButton';

function Review() {
    const { reviewCards } = useReview();
    const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
    const [language, setLanguage] = React.useState('english'); // Make sure to define the default language

    const goToNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % reviewCards.length);
    };

    const goToPreviousCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? reviewCards.length - 1 : prevIndex - 1));
    };

    const toggleLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="Review">
            <h2 className="text-3xl font-bold m-10">Review Cards</h2>
            <LanguageSelector selectedLanguage={language} onLanguageChange={toggleLanguage} />
            <div className="flex flex-col items-center">
                {reviewCards.length > 0 ? (
                    <>
                        <Card
                            question={language === 'english' ? reviewCards[currentCardIndex].word : reviewCards[currentCardIndex].translation}
                            answer={language === 'english' ? reviewCards[currentCardIndex].translation : reviewCards[currentCardIndex].word}
                            language={language}
                        />
                         <div className="flex justify-center mt-4">
                <ArrowButton direction="left" onClick={goToPreviousCard} />
                <ArrowButton direction="right" onClick={goToNextCard} />
              </div>
                    </>
                ) : (
                    <p>No cards to review.</p>
                )}
            </div>
        </div>
    );
}

export default Review;

