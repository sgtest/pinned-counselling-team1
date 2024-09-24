import React from 'react';

const MemberList = ({ members }) => {
  return (
    <div>
      <h2>회원 목록</h2>
      <table>
        <thead>
          <tr>
            <th>이메일</th>
            <th>이름</th>
            <th>회원 유형</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.email}>
              <td>{member.email}</td>
              <td>{member.userName}</td>
              <td>{member.userType}</td>
              <td>{member.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
