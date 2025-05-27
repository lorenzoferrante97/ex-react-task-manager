import { memo } from 'react';
import { Link } from 'react-router-dom';

export default memo(function TaskRow({ task }) {
  const { title, status, createdAt, id } = task;
  const createdDate = new Date(createdAt).toLocaleString();

  const statusStyles = {
    todo: 'bg-red-200 text-red-700',
    doing: 'bg-amber-200 text-amber-700',
    done: 'bg-green-200 text-green-700',
  };

  return (
    <>
      <div className="col-span-full grid grid-cols-subgrid gap-x-2 rounded-lg">
        <div className="col-span-7 p-2 bg-white rounded-lg hover:cursor-pointer">
          <Link to={`/task/:${id}`}>{title}</Link>
        </div>
        <div className={`col-span-2 p-2 rounded-lg ${status == 'To do' ? statusStyles.todo : status == 'Doing' ? statusStyles.doing : statusStyles.done}`}>{status}</div>
        <div className="col-span-3 p-2 bg-white rounded-lg">{createdDate}</div>
      </div>
    </>
  );
});
