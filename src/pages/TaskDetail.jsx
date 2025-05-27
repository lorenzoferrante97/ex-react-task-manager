import { useParams } from 'react-router-dom';

export default function TaskDetail() {
  const taskId = useParams().id;

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Task Detail {taskId}</h1>
    </>
  );
}
