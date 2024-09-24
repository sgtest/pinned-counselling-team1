import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import group1 from '../image/group1.jpg';
import styled from 'styled-components';
import { ImageBgBox } from '@/commons/components/ImageBox';

const Wrapper = styled.ul`
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

const GroupListItem = ({ item, className }) => {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li className={className}>
          <div className="img-box">
            <ImageBgBox
              src={group1}
              alt="그룹이미지"
              width="100%"
              height="200px"
            />
          </div>
          <div className="info-box">
            <dl>
              <dt>{t('집단상담프로그램 번호')}</dt>
              <dd className="cNo">{item?.cNo}</dd>
            </dl>
            <dl>
              <dt>{t('집단상담프로그램명')}</dt>
              <dd className="counselingName">{item?.counselingName}</dd>
            </dl>
            <dl>
              <dt>{t('신청시작일')}</dt>
              <dd className="reservationSdate">{item?.reservationSdate}</dd>
            </dl>
            <dl>
              <dt>{t('신청종료일')}</dt>
              <dd className="reservationEdate">{item?.reservationEdate}</dd>
            </dl>
            <dl>
              <dt>{t('인원수')}</dt>
              <dd className="counselingLimit">{item?.counselingLimit}</dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  );
};

const GroupBox = styled(GroupListItem)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;


`

const ItemsBox = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items && items.length > 0 ? (
        items.map((item,index ) => (
         <GroupBox
         key={index}
         item={item}
         />
        ))
      ) : (
        <li>항목이 없습니다.</li>
      )}
    </ul>
  );
};


export default React.memo(GroupListItem);
