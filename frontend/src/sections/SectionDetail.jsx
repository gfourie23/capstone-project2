


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../flashcards/Card";
import LanguageSelector from "../flashcards/LanguageSelector";
import ArrowButton from "./ArrowButton";
import AddWords from "./AddWords";
import introData from '../schema/intro.json';
import vitalsData from '../schema/vital-signs.json';
import anatomyData from '../schema/anatomy.json';
import exerciseData from "../schema/exercise.json";
import gaitData from "../schema/gait.json";
import balanceData from "../schema/balance.json";
import transfersData from "../schema/transfers.json";
import dmeData from "../schema/dme.json";
import modalitiesData from "../schema/modalities.json";
import { useReview } from "../context/ReviewContext";
import Review from "./Review";

const localStorageKey = 'flashcardAppData';

const loadData = (handle) => {
    const savedData = localStorage.getItem(localStorageKey);
    const defaultData = {
      "introductions": introData,
      "vital-signs": vitalsData,
      "anatomy": anatomyData,
      "exercise": exerciseData,
      "gait": gaitData,
      "balance": balanceData,
      "transfers": transfersData,
      "dme": dmeData,
      "modalities": modalitiesData,
    };

    console.log("Default Data: ", defaultData);
  
    if (savedData) {
      const parsedSavedData = JSON.parse(savedData);
      console.log("Saved Data: ", parsedSavedData);
      const mergedData = { ...defaultData, ...parsedSavedData };
      console.log("Merged Data: ", mergedData);
      return mergedData[handle];
      //return Object.values(mergedData).find(section => section.handle === handle);
    }
    
    return Object.values(defaultData).find(section => section.handle === handle);
  };
  

function SectionDetail() {
  const { handle } = useParams();
  const [section, setSection] = useState(() => loadData(handle));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [language, setLanguage] = useState('english');
  //const [reviewCards, setReviewCards] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [successReviewMessage, setSuccessReviewMessage] = useState("");
  const { addReviewCard } = useReview(); // Use the context

  useEffect(() => {
    const sectionData = loadData(handle);
    console.log("Loaded section data:", sectionData);
    setSection(sectionData);
  }, [handle]);

  useEffect(() => {
    if (section) {
      const savedData = localStorage.getItem(localStorageKey);
      const data = savedData ? JSON.parse(savedData) : {};
      data[handle] = section;
      localStorage.setItem(localStorageKey, JSON.stringify(data));
      console.log(`Saving data for ${handle} to localStorage`);
    }
  }, [section, handle]);

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % section.vocabulary.length);
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? section.vocabulary.length - 1 : prevIndex - 1));
  };

  const addToReview = () => {
    const currentCard = section.vocabulary[currentCardIndex];
    //setReviewCards((prevReviewCards) => [...prevReviewCards, currentCard]);
    addReviewCard(currentCard);
    setSuccessReviewMessage(`"${word}" was successfully added to review.`);
    setTimeout(() => setSuccessReviewMessage(""), 3000); 
  }; 

  const addNewWord = (word, translation) => {
    const newWord = { word, translation };
    const updatedUserVocabulary = [...section.userVocabulary, newWord];
    setSection(prevSection => ({
      ...prevSection,
      vocabulary: updatedUserVocabulary
    }));
    setSuccessMessage(`"${word}" was successfully added to this section.`);
    setTimeout(() => setSuccessMessage(""), 3000); 
  };

  const deleteWord = (index) => {
    const updatedUserVocabulary = section.userVocabulary.filter((_, i) => i !== index);
    setSection(prevSection => ({
      ...prevSection,
      userVocabulary: updatedUserVocabulary
    }));
  };
  

  return (
    <div className="SectionDetail">
      <div className="flex justify-center">
        {section && (
          <div>
            <h4 className="text-3xl font-bold m-10">{section.name}</h4>
            <LanguageSelector selectedLanguage={language} onLanguageChange={toggleLanguage} />
            <div className="flex flex-col items-center">
              <Card
                question={language === 'english' ? section.vocabulary[currentCardIndex].word : section.vocabulary[currentCardIndex].translation}
                answer={language === 'english' ? section.vocabulary[currentCardIndex].translation : section.vocabulary[currentCardIndex].word}
                language={language}
              />
              <div className="flex justify-center mt-4">
                <ArrowButton direction="left" onClick={goToPreviousCard} />
                <ArrowButton direction="right" onClick={goToNextCard} />
              </div>
              <button onClick={addToReview} className="bg-yellow-400 hover:bg-yellow-600 text-gray-600 font-bold py-2 px-4 rounded mr-2">
                Add to Review
        </button>
              <AddWords onAddWord={addNewWord} />
              {successMessage && <p className="mt-4 text-green-800">{successMessage}</p>}
            </div>
          </div>

        )}
      </div>
    </div>
  );
} 



export default SectionDetail;