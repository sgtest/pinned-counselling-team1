'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import ProfileForm from '../components/ProfileForm';
import { updateMemberInfo } from '@/member/apis/apiInfo'; // apiRequest에서 updateMemberInfo 함수 가져오기  (경로 잘 못 됐었음)

const InfoContainer = () => {
  const { t } = useTranslation(); // 다국어 지원을 위한 useTranslation hook 사용
  const router = useRouter(); // 라우터를 사용해 페이지 이동 제어

  // 유저 정보와 관련된 context를 불러옴
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = getUserContext();

  // form 상태와 에러 상태 관리
  const [form, setForm] = useState(userInfo || {}); // 초기값은 userInfo에서 불러옴
  const [errors, setErrors] = useState({}); // 에러 메시지 저장

  // API 호출로 회원정보 수정
  const apiUpdateUser = useCallback(async (form) => {
    try {
      const updatedData = await updateMemberInfo(form); // updateMemberInfo 호출
      return updatedData; // 성공적으로 받은 데이터를 반환
    } catch (err) {
      throw err; // 에러 발생 시 호출한 곳으로 에러 전달
    }
  }, []);

  // 입력값 변경 시 form 상태 업데이트
  const onChange = useCallback((e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }, []);

  // 폼 검증 함수
  const validateForm = useCallback(() => {
    const _errors = {};
    let hasErrors = false;
    const requiredFields = {
      userName: t('회원명을_입력하세요.'), // 필수 항목 메시지
      zonecode: t('우편번호를_입력하세요.'),
      address: t('주소를_입력하세요.'),
      // birth: t('생년월일을_입력하세요.'),
    };

    // 학생일 경우 추가 필드 검증
    if (form?.userType === 'STUDENT') {
      requiredFields.stdntNo = t('학번을_입력하세요.');
      requiredFields.grade = t('학년을_입력하세요.');
    } else {
      requiredFields.empNo = t('사번을_입력하세요.');
    }

    // 필수 필드가 비어있는지 확인
    for (const [field, message] of Object.entries(requiredFields)) {
      const value = form[field];

      // 값이 문자열일 때만 trim()을 호출하고, 그렇지 않으면 빈 값인지 확인 (문자열일때만 trim 가능하다함)
      if (typeof value !== 'string' || !value.trim()) {
        _errors[field] = message; // 에러 메시지 저장
        hasErrors = true;
      }
    }

    setErrors(_errors); // 에러 상태 업데이트
    return !hasErrors; // 에러가 없으면 true 반환
  }, [form, t]);

  // 폼 제출 처리
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault(); // 기본 제출 동작 방지

      // 폼이 유효하지 않으면 중단
      if (!validateForm()) return;

      const _errors = {}; // 에러 메시지 저장용 객체

      try {
        // 회원정보 수정 API 호출
        await apiUpdateUser(form);

        // 폼 초기값으로 리셋 (userInfo로 되돌림)
        setForm(userInfo);

        // 수정 완료 후 마이페이지로 이동
        router.replace('/mypage');
      } catch (err) {
        console.log('err', err);
        // 서버로부터 받은 에러 메시지 처리
        const messages =
          typeof err.message === 'string'
            ? { global: [err.message] }
            : err.message;

        // 에러 메시지 업데이트
        for (const [field, _messages] of Object.entries(messages)) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(_messages);
        }
        setErrors({ ..._errors }); // 에러 상태 업데이트
      }
    },
    [form, validateForm, router, apiUpdateUser, userInfo],
  );

  const fileUploadCallback = useCallback((files) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    const profileImage = `${file.thumbUrl}?seq=${file.seq}&width=300&height=400`;
    setForm((form) => ({ ...form, profileImage }));
  }, []);

  return (
    <ProfileForm
      form={form} // form 데이터
      errors={errors} // 에러 메시지
      onChange={onChange} // 입력값 변경 핸들러
      onSubmit={onSubmit} // 폼 제출 핸들러
      fileUploadCallback={fileUploadCallback}
    />
  );
};

export default React.memo(InfoContainer); // 컴포넌트 최적화를 위해 memo 사용
