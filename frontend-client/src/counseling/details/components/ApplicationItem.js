'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.7em;
  color: #ff5722;
  font-weight: bold;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 5px;
`;

const DetailRow = styled.dl`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  dt {
    font-weight: bold;
    color: #555;
    width: 40%;
    text-align: left;
    font-size: 1.2em;
  }

  dd {
    width: 60%;
    text-align: right;
    font-weight: bold;
    color: #777;
    font-size: ${medium};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      margin-left: 10px;
    }
  }
`;

const StyledButton = styled.button`
  padding: 8px 15px;
  background-color: #ff5722;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const StyledLinkButton = styled(Link)`
  padding: 12px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 100%;
  display: block;
  margin-top: 20px;

  &:hover {
    background-color: #d03e12;
  }
`;

const formatDateTime = (rDateTime) => {
  const date = new Date(rDateTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}-${month}-${day}`;
  const formattedStartTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
  const formattedEndTime = `${hours + 1}:${minutes
    .toString()
    .padStart(2, '0')}`;

  return { formattedDate, formattedStartTime, formattedEndTime };
};

const formatMobileNumber = (mobile) => {
  if (mobile && mobile.length === 11) {
    return `${mobile.slice(0, 3)}-${mobile.slice(3, 7)}-${mobile.slice(7)}`;
  }
  return mobile;
};

const ApplicationItem = ({ item, onCancel }) => {
  const { t } = useTranslation();
  const {
    member: { mobile },
  } = item;
  const {
    rNo,
    status,
    counselingType,
    category,
    counselingName,
    counselorName,
    counselorEmail,
    userName,
    email,
    rDateTime,
    reason,
    record,
  } = item;

  const { formattedDate, formattedStartTime, formattedEndTime } =
    formatDateTime(item?.rDateTime);

  return (
    <Wrapper>
      <Section>
        <SectionTitle>{t('상담신청_정보')}</SectionTitle>
        {rNo && (
          <DetailRow>
            <dt>{t('신청_번호')}</dt>
            <dd>{rNo}번</dd>
          </DetailRow>
        )}
        {formattedDate && (
          <DetailRow>
            <dt>{t('상담일')}</dt>
            <dd>{formattedDate}</dd>
          </DetailRow>
        )}
        {formattedStartTime && formattedEndTime && (
          <DetailRow>
            <dt>{t('상담시간')}</dt>
            <dd>
              {formattedStartTime}~{formattedEndTime}
            </dd>
          </DetailRow>
        )}
        {counselingType && (
          <DetailRow>
            <dt>{t('상담구분')}</dt>
            <dd>{counselingType}</dd>
          </DetailRow>
        )}
        {category && (
          <DetailRow>
            <dt>{t('상담종류')}</dt>
            <dd>{category}</dd>
          </DetailRow>
        )}
        {cName && (
          <DetailRow>
            <dt>{t('상담명')}</dt>
            <dd>{cName}</dd>
          </DetailRow>
        )}
        {counselorName && (
          <DetailRow>
            <dt>{t('상담사명')}</dt>
            <dd>{counselorName}</dd>
          </DetailRow>
        )}
      </Section>

      <Section>
        <SectionTitle>{t('신청자_정보')}</SectionTitle>
        <DetailRow>
          <dt>{t('신청자명')}</dt>
          <dd>{userName}</dd>
        </DetailRow>
        {email && (
          <DetailRow>
            <dt>{t('이메일')}</dt>
            <dd>{email}</dd>
          </DetailRow>
        )}
        {mobile && (
          <DetailRow>
            <dt>{t('전화번호')}</dt>
            <dd>{formatMobileNumber(mobile)}</dd>
          </DetailRow>
        )}
      </Section>

      <Section>
        <DetailRow>
          <dt>{t('진행상태')}</dt>
          <dd>
            {status}
            {['APPLY', 'CONFIRM'].includes(item.status) && (
              <StyledButton type="button" onClick={() => onCancel(rNo)}>
                {t('예약_취소')}
              </StyledButton>
            )}
          </dd>
        </DetailRow>
        <StyledLinkButton href={`/board/write/review?rNo=${reservation.rNo}`}>
          {t('상담일지_작성')}
        </StyledLinkButton>
      </Section>
    </Wrapper>
  );
};

export default React.memo(ApplicationItem);
