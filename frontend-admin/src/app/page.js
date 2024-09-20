'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
export default function Home() {
  const { setShowHeader, setShowFooter, setShowMainMenu } = getCommonActions();

  useLayoutEffect(() => {
    setShowHeader(false);
    setShowFooter(false);
    setShowMainMenu(false);
  }, [setShowHeader, setShowFooter, setShowMainMenu]);

  return <h1>테스트</h1>;
}
