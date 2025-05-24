import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';
import List from '../components/List';

export default function TaskList() {
  const { tasks } = useApiContext();

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

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task List</h1>
      {tasks?.length != 0 ? <List tasks={tasks} /> : <p>No Tasks</p>}
    </>
  );
}
