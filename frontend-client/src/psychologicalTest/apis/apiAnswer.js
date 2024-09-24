import saveProcess from '@/commons/libs/saveProcess';
export default function answer(form) {
  return saveProcess(`/psychologicalTest/answer`, 'POST', form);
}
