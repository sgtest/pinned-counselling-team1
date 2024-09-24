import saveProcess from '@/commons/libs/saveProcess';
import requestData from '@/commons/libs/requestData';

export default function answer(form) {
  return saveProcess(`/psychologicalTest/answer`, 'POST', form);
}

export const getAnswer = (resultId) =>
  requestData(`/psychologicalTest/answer/${resultId}`);

export const getAnswers = (page) =>
  requestData(`/psychologicalTest/answers?page=${page ?? 1}`);
