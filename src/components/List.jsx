import { memo } from 'react';
import TaskRow from './TaskRow';
import useSort from '../hooks/useSort';

import { useApiContext } from '../context/ApiContext';

export default memo(function List({ tasks, changeSort }) {
  return (
    <>
      <div className="w-full bg-neutral-100 p-3 grid grid-cols-12 gap-y-2 rounded-2xl">
        {/* titles */}
        <div className="col-span-full grid grid-cols-subgrid gap-x-2">
          <div onClick={() => changeSort('title')} className="rounded-lg hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-500 col-span-7 font-semibold text-lg p-2">
            Nome
          </div>
          <div onClick={() => changeSort('status')} className="rounded-lg hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-500 col-span-2 font-semibold text-lg p-2">
            Stato
          </div>
          <div onClick={() => changeSort('createdAt')} className="rounded-lg hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-500 col-span-3 font-semibold text-lg p-2">
            Data Creazione
          </div>
        </div>
        {tasks?.map((task) => {
          const { id } = task;

          return <TaskRow key={id} task={task} />;
        })}
      </div>
    </>
  );
});
