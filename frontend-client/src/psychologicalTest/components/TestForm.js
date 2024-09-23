'use client';
import React from 'react';
import styled from 'styled-components';
import StyledMessage from '@/commons/components/StyledMessage';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const FormBox = styled.form``;

const ItemBox = ({ no, item, className }) => {
  const { questionId, questionText, testType } = item;
  const { t } = useTranslation();
  return (
    <li className={className}>
      <div>
        {no}.{questionText}
        {testType === 'COMPULSION' ? (
          <>
            <span>
              <IoIosRadioButtonOff />
              {t('예')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('아니오')}
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};

const TestForm = ({ items, form, errors, onChange, onSubmit }) => {
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      {items && items.length > 0 && (
        <ul>
          {items.map((item, i) => (
            <ItemBox
              key={`questionId_${item.questionId}`}
              item={item}
              no={i + 1}
            />
          ))}
        </ul>
      )}
    </FormBox>
  );
};

export default React.memo(TestForm);
