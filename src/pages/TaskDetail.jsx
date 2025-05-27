import { useParams } from 'react-router-dom';
import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';

export default function TaskDetail() {
  const taskId = parseInt(useParams().id);

  const { tasks } = useApiContext();
  const activeTask = tasks.find((task) => task.id == taskId);
  const { title, description, status, createdAt } = activeTask;

  const createdDate = new Date(createdAt).toLocaleString();

  const statusTextStyles = {
    todo: 'text-red-700',
    doing: 'text-amber-700',
    done: 'text-green-700',
  };
  const statusDotStyles = {
    todo: 'bg-red-300',
    doing: 'bg-amber-300',
    done: 'bg-green-300',
  };

  return (
    <>
      <span className="border border-neutral-200 text-neutral-500 rounded-sm p-2 w-fit">Task Detail {taskId}</span>
      <div className="w-full bg-neutral-100 p-3 grid grid-cols-12 gap-y-2 rounded-2xl">
        <div className="col-span-full bg-white p-4 rounded-lg flex f gap-3 items-center justify-between">
          <div className="flex gap-4 items-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className={` flex items-center gap-2 ${status == 'To do' ? statusTextStyles.todo : status == 'Doing' ? statusTextStyles.doing : statusTextStyles.done}`}>
              <span className={`inline-block size-2 rounded-full ${status == 'To do' ? statusDotStyles.todo : status == 'Doing' ? statusDotStyles.doing : statusDotStyles.done} `}></span>
              <span className="text-lg font-semibold">{status}</span>
            </div>
          </div>
          <div>
            <button onClick={() => console.log('task eliminato')} className="hover:cursor-pointer bg-red-700 text-white rounded-lg px-4 py-2 font-semibold">
              Elimina Task
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-full">
          <div className="col-span-full p-4 flex items-center gap-3">
            <span className="text-lg text-neutral-500">Descrizione</span>
            <div className="rounded-full size-1 bg-neutral-500"></div>
            <p className="italic">" {description} "</p>
          </div>
          <div className="col-span-full p-4 flex items-center gap-3">
            <span className="text-lg text-neutral-500">Creato il</span>
            <div className="rounded-full size-1 bg-neutral-500"></div>
            <p className="italic">" {createdDate} "</p>
          </div>
        </div>
      </div>
    </>
  );
}
