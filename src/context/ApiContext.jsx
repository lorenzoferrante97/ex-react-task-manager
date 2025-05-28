import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();
import useTasks from '../hooks/useTasks';

const ApiProvider = ({ children }) => {
  // use tasks
  const [tasks, isTaskDeleted, addTasks, removeTasks, updateTasks, setTasks, setIsTaskDeleted] = useTasks();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activeModalId, setActiveModalId] = useState('');

  const toggleModal = (modalId) => {
    setActiveModalId(modalId);
    setIsModalOpened(!isModalOpened);
  };

  const value = { tasks, isTaskDeleted, addTasks, setIsTaskDeleted, removeTasks, activeModalId, isModalOpened, toggleModal };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
