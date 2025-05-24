import { createContext, useContext, useState, useCallback } from 'react';
const ApiContext = createContext();

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

  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext };
