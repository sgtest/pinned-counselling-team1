'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { StyledInput } from '@/commons/components/inputs/StyledInput';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 7px;
  padding: 20px;
  margin: 20px auto;
  border-radius: 8px;

  select,
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`;

const SearchBox = ({ search, onChange, onSubmit, onToggle }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('상담일')}</dt>
        <dd>
          <StyledInput
            type="date"
            name="sDate"
            value={search?.sDate ?? ''}
            onChange={onChange}
            placeholder={t('시작일')}
          />
          <StyledInput
            type="date"
            name="eDate"
            value={search?.eDate ?? ''}
            onChange={onChange}
            placeholder={t('종료일')}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('상담시간')}</dt>
        <dd>
          <StyledInput
            type="time"
            name="sTime"
            value={search?.sTime ?? ''}
            onChange={onChange}
            placeholder={t('시작시간')}
          />
          <StyledInput
            type="time"
            name="eTime"
            value={search?.eTime ?? ''}
            onChange={onChange}
            placeholder={t('종료시간')}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('상담종류')}</dt>
        <dd>
          <select
            name="counselingType"
            value={search?.counselingType}
            onChange={onChange}
          >
            <option value="">{t('전체')}</option>
            <option value="GROUP">{t('집단상담')}</option>
            <option value="PERSONAL">{t('개인상담')}</option>
          </select>
          {search?.counselingType === 'PERSONAL' && (
            <select
              name="category"
              value={search?.category}
              onChange={onChange}
            >
              <option value="">{t('전체')}</option>
              <option value="PROFESSOR">{t('교수상담')}</option>
              <option value="EMPLOYMENT">{t('취업상담')}</option>
              <option value="PSYCHOLOGICAL">{t('심리상담')}</option>
            </select>
          )}
        </dd>
      </dl>
      <dl>
        <dd>{t('진행상태')}</dd>
        <dd>
          <span onClick={() => onToggle('status', 'APPLY')}>
            {search?.status === 'APPLY' ? (
              <IoMdRadioButtonOn />
            ) : (
              <IoMdRadioButtonOff />
            )}
            {t('예약접수')}
          </span>
          <span onClick={() => onToggle('status', 'CANCEL')}>
            {search?.gender === 'CANCEL' ? (
              <IoMdRadioButtonOn />
            ) : (
              <IoMdRadioButtonOff />
            )}
            {t('예약취소')}
          </span>
          <span onClick={() => onToggle('status', 'DONE')}>
            {search?.gender === 'DONE' ? (
              <IoMdRadioButtonOn />
            ) : (
              <IoMdRadioButtonOff />
            )}
            {t('상담완료')}
          </span>
        </dd>
      </dl>
      <input type="text" name="skey" value={search.skey} onChange={onChange} />
      <div>
        <StyledButton type="submit" variant="primary">
          {t('검색')}
        </StyledButton>
      </div>
    </FormBox>
  );
};

export default React.memo(SearchBox);
