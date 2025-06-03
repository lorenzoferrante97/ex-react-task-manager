import { useState, useMemo, useCallback } from 'react';
import useFormData from './useFormData';

export default function useSort(tasks) {
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState(1);

  function debounce(callback, delay) {
    let timer;

    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value);
      }, delay);
    };
  }

  const [searchQuery, setSearchQuery] = useState('');
  // const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleSearch = useCallback(
    debounce((e) => {
      setSearchQuery(e.target.value);
    }, 400),
    []
  );

  const sortTasks = useMemo(() => {
    let filteredTasks = [...tasks];

    if (searchQuery.trim().length > 0) {
      filteredTasks = filteredTasks.filter((task) => task.title.toLowerCase().includes(searchQuery.trim().toLowerCase()));
      // return filteredTasks;
    }

    if (sortBy == 'title') {
      if (sortOrder == 1) {
        filteredTasks.sort((task2, task1) => task2.title.localeCompare(task1.title));
      } else {
        filteredTasks.sort((task2, task1) => task1.title.localeCompare(task2.title));
      }
    } else if (sortBy == 'status') {
      const mainOrder = {
        'To do': 0,
        Doing: 1,
        Done: 2,
      };

      if (sortOrder == 1) {
        filteredTasks.sort((task2, task1) => mainOrder[task2.status] - mainOrder[task1.status]);
      } else {
        filteredTasks.sort((task2, task1) => mainOrder[task1.status] - mainOrder[task2.status]);
      }
    } else if (sortBy == 'createdAt') {
      if (sortOrder == 1) {
        filteredTasks.sort((task2, task1) => {
          const t2Date = new Date(task2.createdAt);
          const t1Date = new Date(task1.createdAt);

          return t2Date.getTime() - t1Date.getTime();
        });
      } else {
        filteredTasks.sort((task2, task1) => {
          const t2Date = new Date(task2.createdAt);
          const t1Date = new Date(task1.createdAt);

          return t1Date.getTime() - t2Date.getTime();
        });
      }
    }

    return filteredTasks;
  }, [tasks, sortBy, sortOrder, searchQuery]);

  const changeSort = useCallback(
    (col) => {
      col == sortBy ? (sortOrder == 1 ? setSortOrder(-1) : setSortOrder(1)) : (setSortBy(col), setSortOrder(1));
    },
    [sortBy, sortOrder]
  );

  return { sortBy, sortOrder, sortTasks, changeSort, searchQuery, handleSearch };
}
