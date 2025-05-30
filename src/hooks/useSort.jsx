import { useState, useMemo } from 'react';

export default function useSort(tasks) {
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState(1);

  const sortTasks = useMemo(() => {
    if (sortBy == 'title') {
      if (sortOrder == 1) {
        tasks.sort((task2, task1) => task2.title.localeCompare(task1.title));
      } else {
        tasks.sort((task2, task1) => task1.title.localeCompare(task2.title));
      }
    } else if (sortBy == 'status') {
      const mainOrder = {
        'To do': 0,
        Doing: 1,
        Done: 2,
      };

      if (sortOrder == 1) {
        tasks.sort((task2, task1) => mainOrder[task2.status] - mainOrder[task1.status]);
      } else {
        tasks.sort((task2, task1) => mainOrder[task1.status] - mainOrder[task2.status]);
      }
    }

    return tasks;
  }, [tasks, sortBy, sortOrder]);

  const changeSort = (col) => {
    col == sortBy ? (sortOrder == 1 ? setSortOrder(-1) : setSortOrder(1)) : (setSortBy(col), setSortOrder(1));
  };

  return { sortBy, sortOrder, sortTasks, changeSort };
}
