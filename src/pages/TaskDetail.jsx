import { useParams } from 'react-router-dom';
import { useApiContext } from '../context/ApiContext';
import { useEffect } from 'react';

export default function TaskDetail() {
  const taskId = parseInt(useParams().id);

  const { tasks } = useApiContext();
  const activeTask = tasks.find((task) => task.id == taskId);
  const { title, description, status, createdAt } = activeTask;

  const createdDate = new Date(createdAt).toLocaleString();

  const statusStyles = {
    todo: 'bg-red-200 text-red-700',
    doing: 'bg-amber-200 text-amber-700',
    done: 'bg-green-200 text-green-700',
  };

  return (
    <>
      <span className="border border-neutral-200 text-neutral-500 rounded-sm p-2 w-fit">Task Detail {taskId}</span>
      <div className="w-full bg-neutral-100 p-3 grid grid-cols-12 gap-y-2 rounded-2xl">
        <div className="col-span-full bg-white p-4 rounded-lg flex f gap-3 items-center justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>
          <span className={` py-2 px-3 rounded-lg text-lg font-semibold text-center ${status == 'To do' ? statusStyles.todo : status == 'Doing' ? statusStyles.doing : statusStyles.done} `}>{status}</span>
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
