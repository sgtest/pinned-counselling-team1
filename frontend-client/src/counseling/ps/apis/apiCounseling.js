import apiRequest from '../commons/libs/apiRequest';
import requestData from '../commons/libs/requestData';

// 상담 프로그램 목록 조회
export const apiListCounseling = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${encodeURIComponent(v)}`); // URL 인코딩
  }

  let url = '/counseling';
  if (qs.length > 0) url += `?${qs.join('&')}`;
  return requestData(url);
};

// 상담 프로그램 상세 조회
export const apiGetCounselingInfo = (cNo) =>
  requestData(`/counseling/info/${cNo}`);

// 예약 신청
export const apiApplyReservation = (formData) => {
  return apiRequest('/apply', 'POST', formData);
};
