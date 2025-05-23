import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';

export default function TaskList() {
  const { tasks, setTasks, getTasks } = useApiContext();

  useEffect(() => {
    (async () => {
      const tasksRes = await getTasks();
      setTasks(tasksRes);
    })();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task List</h1>
      {/* <ul>
        {tasks?.map((task) => {
          const { title, id } = task;

          return <li key={id}>{title}</li>;
        })}
      </ul> */}
    </>
  );
}
