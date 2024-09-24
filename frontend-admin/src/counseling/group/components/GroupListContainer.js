'use client';
import React, { useLayoutEffect, useState } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import getQueryString from '@/commons/libs/getQueryString';

const GroupListContainer = ({ searchParams }) => {
  const [pagination, setPagination] = useState(null);
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  const [search, setSearch] = useState(() => getQueryString(searchParams)); // 검색 시 쿼리스트링 값 나오게끔

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode('group');
  }, [setMenuCode, setSubMenuCode]);

  return <h1>집단 상담 프로그램 목록</h1>;
};

export default React.memo(GroupListContainer);
