import React from "react";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        className={`bg-${selectedLanguage === 'english' ? 'blue' : 'gray'}-500 hover:bg-${selectedLanguage === 'english' ? 'blue' : 'gray'}-600 text-white font-bold py-2 px-4 rounded mr-2`}
        onClick={() => onLanguageChange('english')}
      >
        English
      </button>
      <button
        className={`bg-${selectedLanguage === 'spanish' ? 'blue' : 'gray'}-500 hover:bg-${selectedLanguage === 'spanish' ? 'blue' : 'gray'}-600 text-white font-bold py-2 px-4 rounded`}
        onClick={() => onLanguageChange('spanish')}
      >
        Spanish
      </button>
    </div>
  );
};

export default LanguageSelector;