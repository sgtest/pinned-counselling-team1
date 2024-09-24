'use client';
import React from 'react';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const Menus = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  .inner {
    display: flex;
    height: 45px;
    a {
      line-height: 45px;
      fontsize: ${({ theme }) => theme.fontSizes.mediumLarge}px;
      color: ${({ theme }) => theme.colors.black};
      padding: 0 35px;
    }
    a.on,
    a:hover {
      background: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const MainMenu = () => {
  const { showMainMenu } = getCommonStates();
  const { t } = useTranslation();

  return (
    showMainMenu && (
      <Menus>
        <div className="layout-width inner">
          <a href="/psychologicalTest/list">{t('심리검사')}</a>
          <a href="/counseling/personal">{t('개인 상담')}</a>
          <a href="/counseling/group">{t('집단상담 프로그램')}</a>
          <a href="/counseling/details">{t('상담 이력')}</a>
        </div>
      </Menus>
    )
  );
};

export default React.memo(MainMenu);
