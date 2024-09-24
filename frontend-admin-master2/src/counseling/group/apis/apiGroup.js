import requestData from '@/commons/libs/requestData';
import apiRequest from '@/commons/libs/apiRequest';

// 집단상담 프로그램 등록
export const regist = (cNo, form) =>
  saveProcess(`/counseling/group${cNo}`, 'POST', form);

// 집단상담 프로그램 수정
export const update = (cNo, form) =>
  saveProcess(`/counseling/group${cNo}`, 'PATCH', form);

function saveProcess(url, method, form) {
  return new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const res = await apiRequest(url, method, form);
          if (res.status === 201) {
            resolve(res.data.data);
            return;
          }
          reject(res.data);
        } catch (err) {
          console.error(err);
          reject(err);
        }
      })();
    });
  });
}

// 집단상담 프로그램 조회
export const getGroup = (cNo) => requestData(`/counseling/info/${cNo}`);

// 집단상담 프로그램 목록 조회

export const getGroupList = (cNo) => requestData(`/counseling`);
