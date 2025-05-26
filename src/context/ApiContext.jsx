import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();
import useTasks from '../hooks/useTasks';

const ApiProvider = ({ children }) => {
  // use tasks
  const [tasks, addTasks, removeTasks, updateTasks] = useTasks();

  const value = { tasks, addTasks };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
