import BoardContainer from '@/mypage/containers/BoardContainer';
import InfoContainer from '@/mypage/containers/InfoContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import TestContainer from '@/mypage/containers/TestContainer';

const MypageModePage = ({ params, searchParams }) => {
  const { mode } = params;

  let Container = null;
  switch (mode) {
    case 'board':
      Container = BoardContainer;
      break;
    case 'test':
      Container = TestContainer;
      break;
    default:
      Container = InfoContainer;
  }

  return (
    <MemberOnlyContainer>
      <Container searchParams={searchParams} />
    </MemberOnlyContainer>
  );
};

export default MypageModePage;
