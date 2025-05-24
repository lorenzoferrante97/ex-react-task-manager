import { memo } from 'react';
import TaskRow from './TaskRow';

export default memo(function List({ tasks }) {
  return (
    <>
      {/* <ul>
        {tasks?.map((task) => {
          const { title, id } = task;

          return <li key={id}>{title}</li>;
        })}
      </ul> */}
      <div className="w-full bg-neutral-100 p-3 grid grid-cols-12 gap-y-2 rounded-2xl">
        {/* titles */}
        <div className="col-span-full grid grid-cols-subgrid gap-x-2">
          <div className="col-span-7 font-semibold text-lg p-2">Nome</div>
          <div className="col-span-2 font-semibold text-lg p-2">Stato</div>
          <div className="col-span-3 font-semibold text-lg p-2">Data Creazione</div>
        </div>
        {tasks?.map((task) => {
          const { id } = task;

          return <TaskRow key={id} task={task} />;
        })}
      </div>
    </>
  );
});
