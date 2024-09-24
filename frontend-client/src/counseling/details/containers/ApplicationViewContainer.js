'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { apiGet } from '../apis/apiInfo';
import apiStatus from '../apis/apiStatus';
import ApplicationItem from '../components/ApplicationItem';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ViewWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
`;

const ApplicationViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const { rNo } = params;

  const { t } = useTranslation();

  useEffect(() => {

    apiGet(rNo).then((item) => {
      setPageTitle(`${t('상담신청_정보')}`);
      setItem(item);
    });

  }, [rNo, setPageTitle]);

  /* 예약취소 함수*/
  const onCancel = useCallback((rNo) => {
    if (!window.confirm(t('정말_취소하겠습니까'))) {
      return;
    }

    (async () => {
      try {
        const res = await apiStatus(rNo);
        setItems((items) =>
          items.map((item) => (item.rNo === rNo ? res : item)),
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [t]);

  return (
    <ViewWrapper>
      <ApplicationItem item={item} onCancel={onCancel} />
    </ViewWrapper>
  );
};
export default React.memo(ApplicationViewContainer);