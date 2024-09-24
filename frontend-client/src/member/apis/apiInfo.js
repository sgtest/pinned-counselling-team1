import apiRequest from '@/commons/libs/apiRequest';
import requestData from '@/commons/libs/requestData';
import cookies from 'react-cookies';

// 교수 목록 키워드 검색
export const getProfessors = (skey) =>
  requestData(`/member/account/professors?skey=${skey?.trim()}`);

// 인증(로그인)한 회원 정보 조회
export const getMemberInfo = () =>
  new Promise((resolve, reject) => {
    // GET 요청으로 로그인한 회원 정보 조회
    apiRequest('/member/account', 'GET')
      .then((res) => {
        resolve(res.data); // 요청 성공 시 회원 정보 반환
      })
      .catch((err) => {
        cookies.remove('token', { path: '/' }); // 에러 발생 시 토큰 제거
        reject(err); // 요청 실패 시 에러 반환
      });
  });

// 회원 정보 수정
export const updateMemberInfo = (form) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(
          '/member/account/update', // 요청 경로
          'PATCH', // PATCH 메서드 사용
          form, // 수정할 폼 데이터 전달
          {
            'Content-Type': 'application/json', // 요청 헤더 설정
          },
        );

        // 상태 코드가 200이고 응답 데이터에 성공 정보가 있으면 처리
        if (res.status === 200 && res.data.success) {
          resolve(res.data.data); // 수정된 데이터 반환
        } else {
          reject(res.data); // 실패 응답 처리
        }
      } catch (err) {
        reject(err); // 에러 처리
      }
    })();
  });

// 상담원 랜덤 조회
export const getRandomCounselor = () =>
  new Promise((resolve, reject) => {
    // GET 요청으로 랜덤 상담원 정보 조회
    apiRequest('/member/account/counselor', 'GET')
      .then((res) => {
        resolve(res.data); // 요청 성공 시 상담원 정보 반환
      })
      .catch((err) => {
        reject(err); // 요청 실패 시 에러 반환
      });
  });
