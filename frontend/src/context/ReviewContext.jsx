import React, { createContext, useContext, useState } from 'react';

const ReviewContext = createContext();


export const ReviewProvider = ({ children }) => {
    const [reviewCards, setReviewCards] = useState([]);


    // Add a card to the review list
    const addReviewCard = (card) => {
        setReviewCards((prevReviewCards) => [...prevReviewCards, card]);
    };

    return (
        <ReviewContext.Provider value={{ reviewCards, addReviewCard }}>
            {children}
        </ReviewContext.Provider>
    );
};


export const useReview = () => {
    return useContext(ReviewContext);
  };