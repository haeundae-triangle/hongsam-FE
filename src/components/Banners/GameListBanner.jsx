import React from 'react';
import styled from 'styled-components'

// 게임 리스트 만들러가기 고정 베너
export const GameListBanner = () => {
  // 클릭 시 MakeGameList로 이동할 것
  return (
    <Container>
      <BannerContainer>
        <H1>친구야 오늘 할 게임은 ____________야</H1>
        <H2>게임 리스트 공유하고 같이 재밌게 놀자</H2>
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
  background-color: #7EF800;
  margin: 2% auto;
  width: 90vw;
  height: 160px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H1 = styled.h2`
  color: #000000;
  font-size: 32px;
  margin: 2% 0;
  text-align: center;
`;

const H2 = styled.h2`
  color: #000000;
  font-size: 25px;
  margin: 2% 0;
  text-align: center;
`;