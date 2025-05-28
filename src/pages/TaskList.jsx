import { useApiContext } from '../context/ApiContext';
import List from '../components/List';

export default function TaskList() {
  const { tasks } = useApiContext();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task List</h1>
      {tasks?.length != 0 ? <List tasks={tasks} /> : <p>No Tasks</p>}
    </>
  );
}
