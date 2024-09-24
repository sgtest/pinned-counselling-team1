'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StatusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;

  .status {
    font-size: 1.1em;
    color: #3f51b5;
    margin-right: 10px;
  }

  button {
    padding: 6px 12px;
    color: #3f51b5;
    border-color: #3f51b5;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #3f51b5;
      color: white;
    }
  }
`;

const RecordButton = styled.button`
  margin-top: 15px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  height: 37px;

  &:hover {
    background-color: #3f51b5;
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
  const formattedEndTime = `${hours+1}:${minutes.toString().padStart(2, '0')}`;

  return { formattedDate, formattedStartTime, formattedEndTime };
};

const ItemBox = ({ item, className, onCancel }) => {
  const url = `/apply/${item?.rNo}`;
  const { t } = useTranslation();

  const { formattedDate, formattedStartTime, formattedEndTime } = formatDateTime(item?.rDateTime);

  return (
    <table className={className}>
      <thead className="item-title">
        <tr>
          <th>신청번호</th>
          <th>상담일</th>
          <th>상담시간</th>
          <th>상담구분</th>
          <th>상담종류</th>
          <th>상담명</th>
          <th>상담사명</th>
          <th>신청자명</th>
          <th>상담사유</th>
          <th>진행상태</th>
          <th>신청상세</th>
          <th>예약취소</th>
          <th>상담일지</th>
        </tr>
      </thead>
      <tbody className="item-content">
        <tr>
          <td className="rNo">{item?.rNo}</td>
          <td className="rDate">{formattedDate}</td>
          <td className="rTime">{formattedStartTime}~{formattedEndTime}</td>
          <td className="counselingType">{item?.counselingType}</td>
          <td className="category">{item?.category}</td>
          <td className="cName">{item?.counselingName}</td>
          <td className="counselorName">{item?.counselorName}</td>
          <td className="userName">{item?.userName}</td>
          <td className="reason">{item?.reason}</td>
          <td className="status">{item?.status}</td>
          <td>
            <Link href={url}>
                <RecordButton>{t('조회')}</RecordButton>
            </Link>
          </td>
          <td>
            <StatusButtonWrapper>
              {item && ['APPLY', 'CONFIRM'].includes(item.status) && (
                <button type="button" onClick={() => onCancel(item.rNo)}>
                  {t('예약_취소')}
                </button>
              )}
            </StatusButtonWrapper>
          </td>
          <td>
            <Link href="/">
                <RecordButton>{t('상담일지_작성')}</RecordButton>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  .item-title {

  }

  .item-content {

  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ItemsBox = ({ items, onCancel }) => {
  console.log(items);
  return (
    <ul>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <ItemStyledBox key={index} item={item} onCancel={onCancel}/>
        ))
      ) : (
        <li>항목이 없습니다.</li>
      )}
    </ul>
  );
};

export default React.memo(ItemsBox);
