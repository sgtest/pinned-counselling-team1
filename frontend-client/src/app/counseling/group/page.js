'use client';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";
import styled from 'styled-components';

const GroupDes = styled.div`
  .des {
    width: 900px;
  }

  .des_list {
    white-space: nowrap;
    padding: 0; 
    margin: 0; 
  }

.cs1 {
    width: 165px;
    height: 40px;
    background: skyblue;
    color: black;
    padding: 10px 10px; 
    border-radius: 3px;
    display: inline-block; 
    margin-right: 50px; 
    position: relative; 
}

.cs1 span {
    display: block; 
    margin-top: 5px; 

}
`;

const GroupPage = () => {
  return (
    <GroupDes>
      <div>
        <h1>집단상담 프로그램</h1>
        <h4>
          <IoMdArrowForward /> 집단상담은 비슷한 관심을 갖고 있는 학생들과 전문상담원이 함께 만나
          진솔하고 역동적인 상호교류를 통해서 자신과 타인을 보다 잘 이해하고 공감하며 서로의 성장을 돕는 프로그램입니다.
          프로그램마다 차이는 있으나 보통 12명으로 구성되며 자신감 향상, 대인관계 증진, 사회성 향상 등 학기마다 다양한 주제로 모집할 예정이며 주 1회 2시간씩 진행됩니다.
        </h4>
      </div>

      <h4>
        <IoMdArrowForward /> 집단상담 프로그램 진행 절차
      </h4>

    <div>
      <ul className='des_list'>
        <li className="cs1">집단상담 프로그램 공고 게시판
          <span>매월초(홈페이지 게시판)</span>
        </li>
        
        <li className="cs1">집단상담 프로그램 신청 및 확정
          <span>신청기간에 맞춰 온라인 신청</span>
        </li>
        
        <li className="cs1">집단상담 프로그램 진행</li>
      </ul>
      </div>
    </GroupDes>
  );
};

export default React.memo(GroupPage);