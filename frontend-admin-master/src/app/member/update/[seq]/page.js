import UpdateContainer from '@/board/containers/UpdateContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
const MemberUpdatePage = ({ params }) => {
  //const { seq } = params;

  return (
    <AdminOnlyContainer>
      <UpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default MemberUpdatePage;