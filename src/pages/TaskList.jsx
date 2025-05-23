import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';

export default function TaskList() {
  const { tasks, setTasks, getTasks } = useApiContext();

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
