import { useState, useCallback, useEffect, useRef } from 'react';

export default function useTasks() {
  // env variables
  const fetchPath = import.meta.env.VITE_API_URL;

  // list of tasks
  const [tasks, setTasks] = useState([]);

  // is task deleted
  const [isTaskDeleted, setIsTaskDeleted] = useState({
    success: false,
    message: '',
  });

  // is task updated
  const [isTaskUpdated, setIsTaskUpdated] = useState({
    success: false,
    message: '',
  });

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
  const removeTasks = async (taskId) => {
    const fetchTask = await fetch(`${fetchPath}/tasks/${taskId}`, {
      method: 'DELETE',
    });
    const fetchedTask = await fetchTask.json();

    let tempTasks = [...tasks];

    switch (fetchedTask.success) {
      case false:
        setIsTaskDeleted({ ...isTaskDeleted, success: false, message: fetchedTask.message });
        throw new Error(fetchedTask.message);
      case true:
        tempTasks = tempTasks.filter((task) => task.id != taskId);
        setTasks(tempTasks);
        setIsTaskDeleted({ ...isTaskDeleted, success: true, message: 'Task eliminato correttamente' });
        break;
    }
  };

  // update tasks
  const updateTasks = async (updatedTask, taskId) => {
    console.log('updatedTask: ', updatedTask);
    console.log('taskId: ', taskId);

    const { editTitle, editDesc, editStatus } = updatedTask;

    const fetchTask = await fetch(`${fetchPath}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: editTitle, description: editDesc, status: editStatus, id: taskId, createdAt: new Date() }),
    });

    const fetchedTask = await fetchTask.json();

    let tempTasks = [...tasks];

    switch (fetchedTask.success) {
      case true:
        console.log('sono nell update task - success true');
        tempTasks = tempTasks.filter((task) => task.id != fetchedTask.task.id);
        setTasks([...tempTasks, fetchedTask.task]);
        setIsTaskUpdated({ ...isTaskUpdated, success: true, message: 'Task aggiornato correttamente' });
        break;

      case false:
        console.log('sono nell update task - success false');
        setIsTaskUpdated({ ...isTaskUpdated, success: false, message: fetchedTask.message });
        throw new Error(fetchedTask.message);
    }
  };

  return [tasks, isTaskDeleted, addTasks, removeTasks, updateTasks, setTasks, setIsTaskDeleted];
}
