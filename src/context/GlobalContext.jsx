import { createContext, useContext, useState, useCallback, useRef } from 'react';
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const value = {};

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
