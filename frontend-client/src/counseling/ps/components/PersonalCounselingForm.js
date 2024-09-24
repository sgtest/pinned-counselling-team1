'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import PersonalCounselingCalendarForm from './PersonalCounselingCalendarForm';
import InfoBox from './InfoBox';
import { StyledButton } from '@/components/commons/components/buttons/StyledButton';
import MessageBox from '@/components/commons/components/MessageBox';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const TimeTable = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const TimeButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#ff3d00' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ff3d00')};
  border: 1px solid #ff3d00;
  border-radius: 5px;
  width: 130px;
  padding: 10px 35px;
  margin: 5px 5px 20px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ff3d00;
    color: #ffffff;
  }
`;

const ReservationInfoBox = styled.dl`
  font-size: 1.2rem;
`;

const PersonalCounselingForm = ({
  counselingType,
  startDate,
  endDate,
  selectedDate,
  onCalendarClick,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const times = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const FormErrors = {};
    let hasErrors = false;

    // 필수 항목 검증
    const requiredFields = {
      name: t('신청자명을 입력해주세요.'),
      email: t('신청자 이메일을 입력해주세요.'),
      mobile: t('신청자 연락처를 입력해주세요.'),
    };

    if (!selectedDate) {
      FormErrors.date = t('상담 신청 날짜를 선택해주세요.');
      hasErrors = true;
    }
    if (!selectedTime) {
      FormErrors.time = t('상담 신청 시간을 선택해주세요.');
      hasErrors = true;
    }

    for (const [field, message] of Object.entries(requiredFields)) {
      if (!form[field] || !form[field].trim()) {
        FormErrors[field] = message;
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(FormErrors);
      return;
    }

    // 상담 유형별 추가 데이터 설정
    const counselingData = {
      ...form,
      category: counselingType.toUpperCase(), // 상담 유형 대문자로 설정
      rDate: dayjs(selectedDate).format('YYYY-MM-DD'), // 상담 선택 날짜
      rTime: selectedTime, // 상담 선택 시간
      reason: `(${counselingType}) 신청`,
      cNo: null, // 개인 상담이므로 집단 상담 번호는 null
    };

    try {
      await onSubmit(counselingData);
      setSubmissionSuccess(true);
      setForm({ name: '', email: '', mobile: '' });
      setSelectedTime('');
      onCalendarClick(null);
      setErrors({});
    } catch (error) {
      console.error('예약 신청 오류 : ', error);
      setErrors({ submit: t('상담 예약에 실패했습니다.') });
    }
  };

  const onTimeClick = (time) => {
    setSelectedTime(time);
    setErrors((prev) => ({ ...prev, time: null }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <FormBox onSubmit={handleSubmit} autoComplete="off">
      <PersonalCounselingCalendarForm
        startDate={startDate}
        endDate={endDate}
        selectedDate={selectedDate}
        onCalendarClick={onCalendarClick}
      />
      {errors.date && <MessageBox color="danger" messages={errors.date} />}
      <TimeTable>
        <h2>{t('상담 시간 선택')}</h2>
        <div className="time-buttons">
          {times.map((time) => (
            <TimeButton
              type="button"
              key={time}
              isSelected={selectedTime === time}
              onClick={() => onTimeClick(time)}
            >
              {time}
            </TimeButton>
          ))}
        </div>
        {errors.time && <MessageBox color="danger" messages={errors.time} />}
        <ReservationInfoBox>
          <dl>
            <dt>{t('신청자')}</dt>
            <dd>
              <InfoBox
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
              />
              {errors.name && (
                <MessageBox color="danger" messages={errors.name} />
              )}
            </dd>
          </dl>
          <dl>
            <dt>{t('이메일')}</dt>
            <dd>
              <InfoBox
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
              {errors.email && (
                <MessageBox color="danger" messages={errors.email} />
              )}
            </dd>
          </dl>
          <dl>
            <dt>{t('연락처')}</dt>
            <dd>
              <InfoBox
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={onChange}
              />
              {errors.mobile && (
                <MessageBox color="danger" messages={errors.mobile} />
              )}
            </dd>
          </dl>
        </ReservationInfoBox>
        {errors.submit && (
          <MessageBox color="danger" messages={errors.submit} />
        )}
        <StyledButton type="submit" color="primary">
          {t('예약 하기')}
        </StyledButton>
        {submissionSuccess && (
          <MessageBox
            color="success"
            messages={t('상담 예약을 완료했습니다.')}
          />
        )}
      </TimeTable>
    </FormBox>
  );
};

export default React.memo(PersonalCounselingForm);
