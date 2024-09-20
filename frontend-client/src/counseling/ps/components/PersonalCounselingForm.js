'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonalCounselingCalendarForm from './PersonalCounselingCalendarForm';
import InfoInputBox from './InfoInputBox';
import { IoIosTime, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import MessageBox from '../../commons/components/MessageBox';
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

const TitleCalendar = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;

  svg {
    margin-right: 7px;
    font-size: 2.2rem;
  }

  h2 {
    margin: 0;
    font-size: 0.8em;
    font-weight: bold;
  }
`;

const CheckTitle = styled.h3`
  margin: 10px 0 20px 7px;
  font-size: 1.2rem;
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

const PersonalCounselingForm = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    //  minDate, maxDate 설정 -> 해야 하나?
    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      // 선택 날짜에 따른 시간대 설정 : 9시 ~ 17시 - 1타임 1시간씩 배정 총 9타임
      setTimes([
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
      ]);
    } else {
      setTimes([]);
    }
  }, [selectedDate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const FormErrors = {}; // 폼 검증
    if (!form.name) FormErrors.name = t('신청자명을 입력해주세요.');
    if (!form.email) FormErrors.email = t('신청자 이메일을 입력해주세요.');
    if (!form.mobile) FormErrors.mobile = t('신청자 연락처를 입력해주세요.');
    if (!selectedDate) FormErrors.date = t('상담 신청 날짜를 선택해주세요.');
    if (!selectedTime) FormErrors.time = t('상담 신청 시간을 선택해주세요.');

    if (Object.keys(FormErrors).length > 0) {
      setErrors(FormErrors);
      return;
    }

    const personalReservationData = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      reservationDate: dayjs(selectedDate).format('YYYY-MM-DD'),
      reservationTime: selectedTime,
    };

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personalReservationData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        setSubmissionSuccess(true);
        alert(t('상담 예약에 성공했습니다.'));
        setForm({ name: '', email: '', mobile: '' }); // 폼 초기화
        setSelectedDate(null);
        setSelectedTime('');
        setErrors({});
      } else {
        const errorData = await response.json();
        setErrors({
          submit: errorData.message || t('상담 예약에 실패했습니다.'),
        });
      }
    } catch (error) {
      console.error('Error:', error);
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

  const onCalendarClick = (date) => {
    setSelectedDate(date);
    setErrors((prev) => ({ ...prev, date: null }));
  };

  if (loading) {
    return <div>로딩 중</div>;
  }

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <PersonalCounselingCalendarForm
        startDate={dayjs().startOf('day').toDate()} // 최소 날짜 설정 : 오늘
        endDate={dayjs().add(30, 'day').toDate()} // 최대 날짜 설정 : 30일 후
        selectedDate={selectedDate} // 선택된 날짜 전달
        onCalendarClick={onCalendarClick}
      />
      {errors.date && <MessageBox color="danger" messages={errors.date} />}
      <TimeTable>
        {times.length > 0 && (
          <>
            <TitleCalendar>
              <IoIosTime />
              <h2>{t('상담_시간_선택')}</h2>
            </TitleCalendar>
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
            {errors.time && (
              <MessageBox color="danger" messages={errors.time} />
            )}
            <div>
              <TitleCalendar>
                <FaAddressBook />
                <h2>{t('신청자_정보')}</h2>
              </TitleCalendar>
              <ReservationInfoBox>
                <dl>
                  <dt>{t('신청자')}</dt>
                  <dd>
                    <InfoInputBox
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
                    <InfoInputBox
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
                    <InfoInputBox
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
              <TitleCalendar>
                <IoMdCheckmarkCircleOutline />
                <h2>{t('상담_신청_확인_안내_사항')}</h2>
              </TitleCalendar>
              {[
                '* 개인 상담 신청에 성공하였습니다.',
                '* 개인 상담은 교수 상담, 취업 상담, 심리 상담 3가지로 구분되며, 각 상담별로 상담실 호수가 다르니 유의하시길 바랍니다.',
                '* 상담 예약 시간으로부터 15분 이상 늦을 경우 해당 학기의 개인 상담 뿐만 아니라 집단 상담 또한 신청이 불가하오니 지각하지 않을 것을 당부드립니다.',
                '* 교수 상담의 경우, 교수의 스케줄에 따라 상담이 취소될 수 있으니 상담 신청 상태를 확인하시길 바랍니다.',
                '* 취업 상담의 경우, 성적표를 필수로 지참하시길 바랍니다.',
                '* 심리 상담의 경우, 심리 검사 결과지를 필수로 지참하시길 바랍니다.',
                '* 상담 예약은 취소만 가능하며, 수정은 불가능 합니다.',
              ].map((item, index) => (
                <CheckTitle key={index}>{t(item)}</CheckTitle>
              ))}
            </div>
            {errors.submit && (
              <MessageBox color="danger" messages={errors.submit} />
            )}
            <StyledButton type="submit" color="primary">
              {t('예약_하기')}
            </StyledButton>
          </>
        )}
      </TimeTable>
    </FormBox>
  );
};

export default React.memo(PersonalCounselingForm);
