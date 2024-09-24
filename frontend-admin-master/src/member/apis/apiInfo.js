import apiRequest from '@/commons/libs/apiRequest';
import requestData from '@/commons/libs/requestData';
import cookies from 'react-cookies';

// 교수 목록 키워드 검색
// export const getProfessors = (skey) =>
//   requestData(`/member/account/professors?skey=${skey?.trim()}`);

// 회원정보 수정
export const updateMemberInfo = async (form) => {
  return requestData('/admin/update', {  // 경로를 '/admin/update'로 수정
    method: 'PATCH',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// 회원 목록 조회
export const getMemberList = (page = 1, limit = 20, sopt = 'ALL', skey) =>
  requestData(`/admin?page=${page}&limit=${limit}&sopt=${sopt}&skey=${skey?.trim()}`, {
    method: 'GET',
  });

// 특정 회원 정보 조회 (이메일로)
export const getMemberInfoByEmail = (email) =>
  requestData(`/admin/info/${email}`, {
    method: 'GET',
  });

// 회원 탈퇴
export const deleteMember = (seq) =>
  requestData(`/admin/delete/${seq}`, {
    method: 'DELETE',
  });
