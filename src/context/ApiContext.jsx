import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();
import useTasks from '../hooks/useTasks';
import useFormData from '../hooks/useFormData';
import useSort from '../hooks/useSort';

const ApiProvider = ({ children }) => {
  // use tasks
  const [tasks, isTaskDeleted, isTaskUpdated, addTasks, removeTasks, updateTasks, setTasks, setIsTaskDeleted, setIsTaskUpdated] = useTasks();

  // use formdata
  const [formTitle, formDesc, formStatus, isNewTaskAdded, handleTitle, handleSubmit, resetForm, setIsNewTaskAdded, setEditTitle, setEditDesc, setEditStatus, editTitle, editDesc, editStatus] = useFormData();

  // use sort
  const { sortBy, sortOrder, changeSort } = useSort();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [activeModalId, setActiveModalId] = useState('');

  const toggleModal = (modalId) => {
    setActiveModalId(modalId);
    setIsModalOpened(!isModalOpened);
  };

  const value = { tasks, isTaskDeleted, addTasks, setIsTaskDeleted, removeTasks, updateTasks, activeModalId, isModalOpened, toggleModal, setEditTitle, setEditDesc, setEditStatus, editTitle, editDesc, editStatus, isTaskUpdated, setIsTaskUpdated, sortBy, sortOrder, changeSort };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
