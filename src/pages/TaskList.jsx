import { useApiContext } from '../context/ApiContext';
import List from '../components/List';

export default function TaskList() {
  const { tasks } = useApiContext();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task List</h1>
      <div className="flex flex-col gap-3">
        <label className="text-lg" htmlFor="searchTask">
          Cerca una task per nome
        </label>
        <input className="w-full rounded-lg px-4 py-2 min-h-12 bg-white border border-neutral-200 shadow-2xl shadow-black/10" type="text" placeholder="Fare la spesa..." name="searchTask" id="searchTask" />
      </div>
      {tasks?.length != 0 ? <List tasks={tasks} /> : <p>No Tasks</p>}
    </>
  );
}
