'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PersonalCounselingContainer from '../../../components/counseling/PersonalCounselingContainer';

const TypePage = () => {
  const { type } = useParams();
  console.log(type);

  return <PersonalCounselingContainer type={type} />;
};

export default TypePage;
