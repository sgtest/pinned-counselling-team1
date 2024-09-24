import requestData from '@/commons/libs/requestData';

export const apiPsychologicalTestList = () =>
  requestData('/psychologicalTest/list');
