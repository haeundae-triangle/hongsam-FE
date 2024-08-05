import React from 'react';
import styled from 'styled-components'
import { EachGameList } from './EachGameList';

// 게임 리스트 소개
export const GameLists = ( props ) => {
  const { info } = props;
  console.log(info);

  return (
    <Container>
      <TitleContainer>
        <H2>홍삼이 추천하는 게임박스</H2>
      </TitleContainer>
      <EachGameLists>
      {info.length > 0 && info.map((box) => 
        <EachGameList key={box.playlist_id} info={box}/>
      )}
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