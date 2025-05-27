import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();
import useTasks from '../hooks/useTasks';

const ApiProvider = ({ children }) => {
  // use tasks
  const [tasks, isTaskDeleted, addTasks, removeTasks, updateTasks, setTasks, setIsTaskDeleted] = useTasks();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
    console.log('sono nel toggle');
  };

  const value = { tasks, isTaskDeleted, addTasks, setIsTaskDeleted, removeTasks, isModalOpened, toggleModal };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
