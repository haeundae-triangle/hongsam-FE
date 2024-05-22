import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

// 게임 리스트 만들러가기 고정 베너
export const GameListBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/MakeGameList');
  };

  return (
    <Container>
      <BannerContainer onClick={handleClick}>
        <H4>홍삼으로 같이 할 게임 공유하고, 함께 술자리 즐겨요</H4>
        <H3>홍삼과 함께라면, 어떤 술게임도 어렵지 않아요!</H3>
      </BannerContainer>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: 180px;
`;

const BannerContainer = styled.div`
  background-color: #f8f8f8;
  margin: 2% auto;
  width: 90vw;
  height: 100px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H4 = styled.h4`
  color: #FF5171;
  font-size: 14px;
  margin: 2% 0;
  text-align: center;
`;

const H3 = styled.h3`
  color: #222222;
  font-size: 16px;
  margin: 2% 0;
  text-align: center;
`;