import GroupListContainer from '@/counseling/containers/GroupListContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
const CounselingGroupPage = ({ searchParams }) => {
  return (
    <AdminOnlyContainer>
      <GroupListContainer searchParams={searchParams} />
    </AdminOnlyContainer>
  );
};

export default CounselingGroupPage;
