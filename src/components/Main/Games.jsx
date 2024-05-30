import React from 'react';
import styled from 'styled-components'
import { EachGame } from './EachGame';

export const Games = ({ listFilter, checkbox }) => {

return (
  <Container>
    {!checkbox && (
    <TitleContainer>
      <H2>{ listFilter }</H2> 
      <H3>리스트 설명을 기입할 공간입니다</H3>
    </TitleContainer>
    )}
    <EachGames>
      <EachGame checkbox={checkbox} />
      <EachGame checkbox={checkbox} />
      <EachGame checkbox={checkbox} />
      <EachGame checkbox={checkbox} />
      <EachGame checkbox={checkbox} />
    </EachGames>
  </Container>
);
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: auto;;
`

const TitleContainer = styled.div`
  height: auto;;
`

const H2 = styled.h2`
  color: #f3f3f3;
  font-size: 25px;
  margin: 2% 0 0 0;;
`  

const H3 = styled.h3`
  color: #f8f8f8;   
  font-size: 16px;
`

const EachGames = styled.div`
  display: flex;   
  flex-direction: column;   
  width: 100%;   
  height: auto;;
`  