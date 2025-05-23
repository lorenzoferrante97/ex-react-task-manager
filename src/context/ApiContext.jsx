import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  // env variables
  const fetchPath = import.meta.env.VITE_API_URL;

  // list of tasks
  const [tasks, setTasks] = useState([]);

  // get tasks
  const getTasks = useCallback(async () => {
    const tasks = await fetch(`${fetchPath}/tasks`);
    if (!tasks.ok) {
      throw new Error('Failed to fetch! Check the fetch...');
    } else {
      const tasksJson = await tasks;
      return tasksJson;
    }
  }, []);

  const value = { tasks, setTasks, getTasks };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
