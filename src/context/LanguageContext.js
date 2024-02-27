import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext)
}

export const useLanguageUpdate = () => {
    return useContext(LanguageUpdateContext)
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={ language }>
        <LanguageUpdateContext.Provider value={ changeLanguage }>
            {children}
        </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};