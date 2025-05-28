import { useState } from 'react';

export default function useSort() {
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState(1);

  const changeSort = (col) => {
    col == sortBy ? (sortOrder == 1 ? setSortOrder(-1) : setSortOrder(1)) : (setSortBy(col), setSortOrder(1));
  };

  return { sortBy, sortOrder, changeSort };
}
