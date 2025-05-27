import { useState, useCallback, useEffect, useRef } from 'react';

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
  const addTasks = async (newTask) => {
    // console.log('newTask: ', newTask);
    const fetchTask = await fetch(`${fetchPath}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const fetchedTask = await fetchTask.json();

    switch (fetchedTask.success) {
      case false:
        throw new Error(fetchedTask.message);
      case true:
        setTasks([...tasks, fetchedTask.task]);
        return fetchedTask.task;
    }
  };

  // remove tasks
  const removeTasks = () => {};

  // update tasks
  const updateTasks = () => {};

  return [tasks, addTasks, removeTasks, updateTasks, setTasks];
}
