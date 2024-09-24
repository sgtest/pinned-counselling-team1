'use client';
import React from 'react';
import AnswerView from '../components/AnswerView';

const AnswerContainer = ({ params }) => {
  const { resultId } = params;

  return <AnswerView />;
};

export default React.memo(AnswerContainer);
