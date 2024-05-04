import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../flashcards/Card";
import introData from '../schema/intro.json';
import vitalsData from '../schema/vital-signs.json';
import anatomyData from '../schema/anatomy.json';
import exerciseData from "../schema/exercise.json";
import gaitData from "../schema/gait.json";
import balanceData from "../schema/balance.json";
import transfersData from "../schema/transfers.json";
import dmeData from "../schema/dme.json";
import modalitiesData from "../schema/modalities.json";
import LanguageSelector from "../flashcards/LanguageSelector";
import ArrowButton from "./ArrowButton";

function SectionDetail() {
    const { handle } = useParams();
    const [section, setSection] = useState(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [language, setLanguage] = useState('english'); // Default language is English
    const [reviewCards, setReviewCards] = useState([]);

    useEffect(() => {
        if (handle === "introductions") {
            setSection(introData);
        } else if (handle === "vital-signs") {
            setSection(vitalsData);
        } else if (handle === "anatomy") {
            setSection(anatomyData);
        } else if (handle === "exercise") {
            setSection(exerciseData);
        } else if (handle === "gait") {
            setSection(gaitData);
        } else if (handle === "balance") {
            setSection(balanceData);
        } else if (handle === "transfers") {
            setSection(transfersData);
        } else if (handle === "dme") {
            setSection(dmeData);
        } else if (handle === "modalities") {
            setSection(modalitiesData);
        }
    }, [handle]);

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
        setReviewCards((prevReviewCards) => [...prevReviewCards, currentCard]);
    };

    return (
        <div className="SectionDetail">
            <div className="flex justify-center">
                {section && (
                    <div>
                        <h4 className="text-3xl font-bold m-10">{section.sectionName}</h4>
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
                                <button onClick={addToReview} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">
                                    Add to Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SectionDetail;
