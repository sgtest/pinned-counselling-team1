'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import { StyledInput } from '@/commons/components/inputs/StyledInput';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import userType from '@/member/constants/userType';
import userStatus from '@/member/constants/userStatus';

// 마이페이지 - 회원정보수정페이지
const FormBox = styled.form``;

const ProfileForm = ({ form, errors, onSubmit, onChange, onToggle }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('회원유형')}</dt>
        <dd>
          {Object.keys(userType)
            .filter((k) => k !== 'ADMIN')
            .map((k, i) => (
              <span
                key={`userType_${k}`}
                onClick={() => onToggle('userType', k)}
              >
                {form?.userType === k ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {userType[k]}
              </span>
            ))}
        </dd>
      </dl>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="email"
            value={form?.email ?? ''}
            onChange={onChange}
            disabled={true} // 이메일은 수정 불가
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="userName"
            value={form?.userName ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.userName}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="mobile"
            value={form?.mobile ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.mobile}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('우편번호')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="zonecode"
            value={form?.zonecode ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.zonecode}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('주소')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="address"
            value={form?.address ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.address}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('나머지_주소')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="addressSub"
            value={form?.addressSub ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.addressSub}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('생년월일')}</dt>
        <dd>
          <StyledInput
            type="date"
            name="birth"
            value={form?.birth ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.birth}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('성별')}</dt>
        <dd>
          <span onClick={() => onToggle('gender', 'FEMALE')}>
            {form?.gender === 'FEMALE' ? (
              <IoMdRadioButtonOn />
            ) : (
              <IoMdRadioButtonOff />
            )}
            {t('여성')}
          </span>
          <span onClick={() => onToggle('gender', 'MALE')}>
            {form?.gender === 'MALE' ? (
              <IoMdRadioButtonOn />
            ) : (
              <IoMdRadioButtonOff />
            )}
            {t('남성')}
          </span>
          <StyledMessage variant="danger">{errors?.gender}</StyledMessage>
        </dd>
      </dl>

      {form?.userType === 'STUDENT' ? (
        <>
          <dl>
            <dt>{t('학번')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="stdntNo"
                value={form?.stdntNo ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.stdntNo}</StyledMessage>
            </dd>
          </dl>
          <dl>
            <dt>{t('학년')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="grade"
                value={form?.grade ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.grade}</StyledMessage>
            </dd>
          </dl>
        </>
      ) : (
        <>
          <dl>
            <dt>{t('사번')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="empNo"
                value={form?.empNo ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.empNo}</StyledMessage>
            </dd>
          </dl>
        </>
      )}

      <StyledButton type="submit" variant="primary">
        {t('회원정보 수정')}
      </StyledButton>
      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
    </FormBox>
  );
};

export default React.memo(ProfileForm);
