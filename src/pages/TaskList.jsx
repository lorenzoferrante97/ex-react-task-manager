import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';
import List from '../components/List';
import useTasks from '../hooks/useTasks';

export default function TaskList() {
  // const { tasks, setTasks, getTasks } = useApiContext();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const tasksRes = await getTasks();
  //       setTasks(tasksRes);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, []);

  const tasks = useTasks();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task List</h1>
      {tasks?.length != 0 ? <List tasks={tasks} /> : <p>No Tasks</p>}
    </>
  );
}
