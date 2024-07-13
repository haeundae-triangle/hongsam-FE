import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // gameID 받기
import React from 'react';
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

import ToolbarTopSide from "../components/ToolbarTopside";
import { GameRules } from '../components/GameRules';

// import useFetchEachGameInfo from '../hooks/useFetchEachGameInfo';
import fetchEachGameInfo from '../gameAPI/fetchEachGameInfo';


const GameDetail = () => {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId');
  const [game, setGame] = useState([]);

  useEffect (() => {
    if (gameId) {
      fetchEachGameInfo(gameId)
        .then((gameInfo) => setGame(gameInfo))
        .catch((error) => console.error('error :', error.message));
    }
  }, [gameId])

  const [selected, setSelected] = useState('rule')

  return (
    <Container>
      {/* {gameId &&
      <> */}
        <ToolbarTopSide />
      <PictureContainer></PictureContainer>
      <InformationContainer>
        <H2>{game.game_name}</H2>
        <H3>{game.game_feature}</H3>
        {/* 게임 정보 추가 제공 */}
      </InformationContainer>
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
          <GameRules game={game}/>
        ) : (
          <GameMedia>게임 미디어 내용...</GameMedia>
        )}
      </GameInfoTab>
      {/* </>
      } */}
    </Container>
  );
}

export default GameDetail;

const Container = styled.div`
  background-color: #222222;
`

const PictureContainer = styled.div`
  height: 260px;
  background-color: red;
`

const InformationContainer = styled.div`
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