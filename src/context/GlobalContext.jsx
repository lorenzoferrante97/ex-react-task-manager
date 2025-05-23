import { createContext, useContext } from 'react';
const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
