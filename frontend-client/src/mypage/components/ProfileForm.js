'use client';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/inputs/StyledInput';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import userType from '@/member/constants/userType';
import userStatus from '@/member/constants/userStatus';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import FileUpload from '@/commons/components/FileUpload';

const StyledFileUpload = styled(FileUpload)``;

// 마이페이지 - 회원정보수정페이지
const FormBox = styled.form``;

const ProfileForm = ({
  form,
  errors,
  onSubmit,
  onChange,
  fileUploadCallback,
}) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('회원유형')}</dt>
        <dd>{userType[form?.userType]}</dd>
      </dl>
      <dl>
        <dt>{t('프로필_이미지')}</dt>
        <dd>
          <StyledFileUpload
            imageOnly={true}
            gid={form?.gid}
            single={true}
            done={true}
            width={400}
            color="primary"
            imageUrl={form?.profileImage}
            callback={fileUploadCallback}
          >
            {t('이미지_첨부')}
          </StyledFileUpload>
        </dd>
      </dl>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>{form?.email}</dd>
      </dl>

      <dl>
        <dt>{t('회원명')}</dt>
        <dd>{form?.userName}</dd>
      </dl>

      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <StyledInput
            type="password"
            name="password"
            value={form?.password ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.password}</StyledMessage>
        </dd>
      </dl>

      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <StyledInput
            type="password"
            name="confirmPassword"
            value={form?.confirmPassword ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">
            {errors?.confirmPassword}
          </StyledMessage>
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
            name="addresssub"
            value={form?.addresssub ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.addresssub}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('생년월일')}</dt>
        <dd>{form?.birth}</dd>
      </dl>
      <dl>
        <dt>{t('성별')}</dt>
        <dd>{form?.gender === 'FEMALE' ? t('여성') : t('남성')}</dd>
      </dl>

      {form?.userType === 'STUDENT' ? (
        <>
          <dl>
            <dt>{t('학번')}</dt>
            <dd>{form?.stdntNo}</dd>
          </dl>
          <dl>
            <dt>{t('학년')}</dt>
            <dd>{form?.grade}</dd>
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
