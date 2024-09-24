'use client';
import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import { apiList } from '../apis/apiInfo';
import apiStatus from '../apis/apiStatus';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../../commons/components/Pagination';
import { useTranslation } from 'react-i18next';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const ApplicationListContainer = ({ params, searchParams }) => {

  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([
    {
      rNo: 1,
      status: 'APPLY',
      counselingType: 'PERSONAL',
      category: 'PROFESSOR',
      counselingName: '상담명',
      counselorName: '교수명',
      counselorEmail: 'user99@test.org',
      userName: '학생명',
      email: 'user01@test.org',
      rDateTime: '2024-09-24 14:00:00',
      reason: '상담사유',
      record: '상담일지',
    },
  ]);
  const [pagination, setPagination] = useState({});
  const { rNo } = params;

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const { items, pagination } = await apiList(search);
        setItems(items);
        setPagination(pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search, rNo]);

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

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
    <>
      <ItemsBox items={items} onCancel={onCancel} />
      {items?.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ApplicationListContainer);
