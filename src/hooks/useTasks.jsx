import { useState, useCallback, useEffect } from 'react';

export default function useTasks() {
  // env variables
  const fetchPath = import.meta.env.VITE_API_URL;

  // list of tasks
  const [tasks, setTasks] = useState([]);

  // get tasks
  const getTasks = useCallback(async () => {
    const fetchedtasks = await fetch(`${fetchPath}/tasks`);
    if (!fetchedtasks.ok) {
      throw new Error('Failed to fetch! Check the fetch...');
    } else {
      const tasksJson = await fetchedtasks.json();
      return tasksJson;
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const tasksRes = await getTasks();
        setTasks(tasksRes);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // add tasks
  const addTasks = () => {};

  // remove tasks
  const removeTasks = () => {};

  // update tasks
  const updateTasks = () => {};

  return [tasks, addTasks, removeTasks, updateTasks];
}
