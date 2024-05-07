import React, { useState } from 'react';
import styled from 'styled-components'
import { EachGame } from './EachGame';

// 게임 소개
export const Games = ({ listFilter }) => {

  return (
    <Container>
      <TitleContainer>
        <H2>{ listFilter }</H2>
      </TitleContainer>
      <EachGames>
        <EachGame />
        <EachGame />
        <EachGame />
        <EachGame />
      </EachGames>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: auto;
`;

const TitleContainer = styled.div`
  height: auto;
`;

const H2 = styled.h2`
  color: #f3f3f3;
  font-size: 25px;
  margin: 2% 0 0 0;
`;

const EachGames = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;