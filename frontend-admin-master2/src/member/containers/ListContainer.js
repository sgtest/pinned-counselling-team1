'use client';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { getMemberList } from '../apis/apiInfo'; // API 호출 함수 임포트
import MemberList from '../components/MemberList'; // MemberList 컴포넌트 임포트

const MemberListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  
  // 회원 목록 상태
  const [members, setMembers] = useState([]);
  // 로딩 상태
  const [loading, setLoading] = useState(true);
  // 오류 상태
  const [error, setError] = useState(null);

  // 메뉴 코드 설정
  useLayoutEffect(() => {
    setMenuCode('member');  // 메인 메뉴 'member' 설정
    setSubMenuCode('list');  // 서브 메뉴 'list' 설정
  }, [setMenuCode, setSubMenuCode]);

  // 회원 목록 데이터를 가져오는 함수
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // getMemberList API 호출하여 회원 목록 가져오기
        const response = await getMemberList(1, 20); // 1페이지, 20개 항목
        setMembers(response.data.items); // 회원 목록을 상태에 저장
      } catch (err) {
        setError(err.message); // 오류 발생 시 오류 메시지 설정
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchMembers(); // 컴포넌트가 마운트될 때 API 호출
  }, []);

  // 로딩 상태 처리
  if (loading) return <div>로딩 중...</div>; // 로딩 중일 때 표시
  if (error) return <div>오류 발생: {error}</div>; // 오류 발생 시 메시지 표시

  // 회원 목록이 로드되었을 때 MemberList 컴포넌트를 렌더링
  return <MemberList members={members} />;
};

export default React.memo(MemberListContainer);
