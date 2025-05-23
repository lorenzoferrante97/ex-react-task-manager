export default function TaskRow({ task }) {
  const { title, status, createdAt } = task;

  return (
    <>
      <div className="col-span-full grid grid-cols-subgrid gap-x-2 rounded-lg">
        <div className="col-span-4 p-2 bg-white rounded-lg">{title}</div>
        <div className="col-span-4 p-2 bg-white rounded-lg">{status}</div>
        <div className="col-span-4 p-2 bg-white rounded-lg">{createdAt}</div>
      </div>
    </>
  );
}
