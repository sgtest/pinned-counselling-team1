import saveProcess from '../../../commons/libs/saveProcess';

export default function change(rNo, status) {
  return saveProcess(`/apply/${rNo}/${status}`);
}