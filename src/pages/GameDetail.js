import { useState } from 'react';
import React from 'react';
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

import ToolbarTopSide from "../components/ToolbarTopside";
import { GameRules } from '../components/GameRules';


const GameDetail = () => {
  const [selected, setSelected] = useState('rule')

  return (
  <div className="main-view">
    <div style={{height:'2vw'}}></div>
    <ToolbarTopSide />
    <PictureContainer></PictureContainer>
    <InfomationContainer>
      <H2>Game Title</H2>
      <H3>A description of the game</H3>
      {/* 게임 정보 추가 제공 */}
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
    <GameInfoTab>
      <TabButton onClick={() => setSelected('rule')} selected={selected === 'rule'}>게임방식</TabButton>
      <TabButton onClick={() => setSelected('media')} selected={selected === 'media'}>참고영상</TabButton>
      {/* 조건부 렌더링 */}
      {selected === 'rule' ? (
        <GameRules />
      ) : (
        <GameMedia>게임 미디어 내용...</GameMedia>
      )}
    </GameInfoTab>
  </div>
  );
}

export default GameDetail;

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

const GameInfoTab = styled.div`
  padding: 2% 5%;
`

const TabButton = styled.button`
  height: 10vw;
  color: white;
  font-size: 15px;
  position: relative;
  margin: 1%;
  &:hover {
    opacity: 0.8;
  }

  ${({ selected }) =>
    selected &&
    `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0
      bottom: 100%;
      margin: auto;
      width: 100%;
      height: 8%;
      background-color: white;
    }
  `}
`;


const GameMedia = styled.div`
  height: 20vw;
`