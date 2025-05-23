import { memo } from 'react';

export default memo(function List({ tasks }) {
  return (
    <>
      <ul>
        {tasks?.map((task) => {
          const { title, id } = task;

          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
});
