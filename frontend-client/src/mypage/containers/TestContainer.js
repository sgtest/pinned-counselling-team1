'use client';
import React, { useEffect, useState, useCallback } from 'react';
import PsychologicalTest from '../components/PsychologicalTest';
import { getAnswers } from '@/psychologicalTest/apis/apiAnswer';
import Pagination from '@/commons/components/Pagination';

const TestContainer = () => {
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAnswers(page);
        setItems(data.items);
        setPagination(data.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  const onPageClick = useCallback((page) => {
    setPage(page);
  }, []);

  if (!items || items.length === 0) {
    return <h1>로딩....</h1>;
  }

  return (
    <>
      <PsychologicalTest items={items} />
      <Pagination pagination={pagination} onClick={onPageClick} />
    </>
  );
};

export default React.memo(TestContainer);
