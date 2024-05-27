// import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

import ToolbarTopSide from "../components/ToolbarTopside";
import { SearchBar } from "../components/SearchBar";
import { Games } from "../components/Main/Games"


const GameListDetail = () => {

  return (
  <Container>
    <ToolbarTopSide />
    <PictureContainer></PictureContainer>
    <InfomationContainer>
      <H2>Game List Title</H2>
      <H3>A description of the game</H3>
      {/* 이 부분에 들어갈 설명 수정 필요 */}
    </InfomationContainer>
    <IconContainer>
      <EachIconContainer>
        <AiOutlinePlus style={{ color: '#f3f3f3', fontSize: '42px' }}/>
        <H5>내 리스트에 추가</H5>
      </EachIconContainer>
      <EachIconContainer>
        <AiOutlineHeart style={{ color: '#f3f3f3', fontSize: '42px' }} />
        <H5>좋아요</H5>
      </EachIconContainer>
      <EachIconContainer>
        <AiOutlineShareAlt style={{ color: '#f3f3f3', fontSize: '42px' }}/>
        <H5>친구에게 공유</H5>
      </EachIconContainer>
    </IconContainer>
    <SearchBar />
    <GamesContainer>
      <Games />
    </GamesContainer>
  </Container>
  );
}

export default GameListDetail;

const Container = styled.div`
  background-color: #222222;
`

const PictureContainer = styled.div`
  height: 260px;
  background-color: red;
`

const InfomationContainer = styled.div`
  height: auto;
  padding: 1% 6%;
`

const H2 = styled.h2`
  color: white;
  font-size: 25px;
  margin: 3% 0;
`;

const H3 = styled.h4`
  color: #f3f3f3;
  font-size: 16px;
  margin: 0;
`

const IconContainer = styled.div`
  height: 100px;
  padding: 1% 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: green;
`

const EachIconContainer = styled.div`
  width: 25%;
  text-align: center;
`

const H5 = styled.h5`
  font-size: 12px;
  color: #f3f3f3;
  margin: 10% 0 0 0;
`

const GamesContainer = styled.div`
  padding: 0 5%;
`