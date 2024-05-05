import React from 'react';
import styled from 'styled-components'
import { EachGameList } from './EachGameList';

// 게임 리스트 소개
export const GameLists = () => {
  // 각 게임 리스트 카드 보여주기
  return (
    <Container>
      <TitleContainer>
        <H2>지금 우리 학교는?</H2>
      </TitleContainer>
      <EachGameLists>
        <EachGameList />
        <EachGameList />
        {/* <EachGameList />
        <EachGameList /> */}
      </EachGameLists>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: 300px;
  padding: 0 5%;
`;

const TitleContainer = styled.div`
  height: 50px;
`;

const H2 = styled.h2`
  color: #f3f3f3;
  font-size: 25px;
  margin: 2% 0;
`;

const EachGameLists = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: auto;
  height: 100%;

  & > div {
    margin: 0 10px 0 0;
  }
`;