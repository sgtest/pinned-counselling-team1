import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import GroupUpdateContainer from '@/counseling/group/components/GroupUpdateContainer';

const GroupRegisterPage = ({ params }) => {
  return (
    <AdminOnlyContainer>
      <GroupUpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default GroupRegisterPage;
