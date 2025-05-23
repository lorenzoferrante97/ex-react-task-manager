import { memo } from 'react';

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
          <div className="col-span-4 font-semibold text-lg p-2">Nome</div>
          <div className="col-span-4 font-semibold text-lg p-2">Stato</div>
          <div className="col-span-4 font-semibold text-lg p-2">Data Creazione</div>
        </div>
        <div className="col-span-full grid grid-cols-subgrid gap-x-2 rounded-lg">
          <div className="col-span-4 p-2 bg-white rounded-lg">Nome</div>
          <div className="col-span-4 p-2 bg-white rounded-lg">Stato</div>
          <div className="col-span-4 p-2 bg-white rounded-lg">Data Creazione</div>
        </div>
      </div>
    </>
  );
});
