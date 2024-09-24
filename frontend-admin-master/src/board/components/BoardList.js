import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import Link from 'next/link'; // Next.js의 Link 컴포넌트 사용

const exampleBoardData = [
    { bid: 'counseling', bName: '상담 게시판', active: true, listOrder: 0 },
    { bid: 'review', bName: '상담 일지', active: true, listOrder: 1 },
    { bid: 'notice', bName: '공지사항', active: true, listOrder: 2 },
];

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const StyledThead = styled.thead`
    background-color: #3f51b5; /* 파란색 배경 */
`;

const StyledTh = styled.th`
    padding: 12px;
    color: white; /* 글자 색상 흰색 */
    text-align: center; /* 가운데 정렬 */
    border-right: 1px solid white; /* 세로 구분선 */

    &:last-child {
        border-right: none; /* 마지막 셀 오른쪽 경계선 없애기 */
    }
`;

const StyledTd = styled.td`
    padding: 12px;
    border-bottom: 1px solid white; /* 하단 구분선 */
    border-right: 1px solid white; /* 세로 구분선 */
    text-align: center; /* 가운데 정렬 */

    &:last-child {
        border-right: none; /* 마지막 셀 오른쪽 경계선 없애기 */
    }

    button {
        margin: 0 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &.edit {
            background-color: #4A90E2;
            color: white;
        }

        &.delete {
            background-color: #e74c3c;
            color: white;
        }
    }
`;

const BoardList = () => {
    const [boardData, setBoardData] = useState(exampleBoardData);
    const [searchParams, setSearchParams] = useState({ sopt: 'ALL', skey: '' });

    const handleSearch = (searchData) => {
        const { sopt, skey } = searchData;
        setSearchParams(searchData);

        const filteredData = exampleBoardData.filter((board) => {
            if (sopt === 'ALL') {
                return Object.values(board).some(value =>
                    String(value).toLowerCase().includes(skey.toLowerCase())
                );
            }
            return String(board[sopt]).toLowerCase().includes(skey.toLowerCase());
        });

        setBoardData(filteredData);
    };

    const handleDelete = (bid) => {
        if (window.confirm(`${bid} 게시글을 정말 삭제하시겠습니까?`)) {
            setBoardData(prevData => prevData.filter(board => board.bid !== bid));
            console.log(`게시글 ${bid} 삭제 완료`);
        }
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} searchParams={searchParams} />
            <StyledTable>
                <StyledThead>
                    <tr>
                        <StyledTh>게시판 ID</StyledTh>
                        <StyledTh>게시판 이름</StyledTh>
                        <StyledTh>사용여부</StyledTh>
                        <StyledTh>진열가중치</StyledTh>
                        <StyledTh>관리</StyledTh>
                    </tr>
                </StyledThead>
                <tbody>
                    {boardData.length > 0 ? (
                        boardData.map((board) => (
                            <tr key={board.bid}>
                                <StyledTd>{board.bid}</StyledTd>
                                <StyledTd>{board.bName}</StyledTd>
                                <StyledTd>{board.active ? '사용' : '사용안함'}</StyledTd>
                                <StyledTd>{board.listOrder}</StyledTd>
                                <StyledTd>
                                    <Link href={`/board/update/${board.bid}`} passHref>
                                        <button className="edit">수정</button>
                                    </Link>
                                    <button className="delete" onClick={() => handleDelete(board.bid)}>삭제</button>
                                </StyledTd>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <StyledTd colSpan="5">조회된 게시글이 없습니다.</StyledTd>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </div>
    );
};

export default BoardList;
