import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();
import useTasks from '../hooks/useTasks';

const ApiProvider = ({ children }) => {
  // // env variables
  // const fetchPath = import.meta.env.VITE_API_URL;

  // // list of tasks
  // const [tasks, setTasks] = useState([]);

  // // get tasks
  // const getTasks = useCallback(async () => {
  //   const fetchedtasks = await fetch(`${fetchPath}/tasks`);
  //   if (!fetchedtasks.ok) {
  //     throw new Error('Failed to fetch! Check the fetch...');
  //   } else {
  //     const tasksJson = await fetchedtasks.json();
  //     return tasksJson;
  //   }
  // }, []);

  // use tasks
  const [tasks, addTasks, removeTasks, updateTasks] = useTasks();

  const value = { tasks };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
