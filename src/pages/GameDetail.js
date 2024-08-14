import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // gameID 받기
import React from 'react';
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { FaFire } from 'react-icons/fa';

import ToolbarTopSide from "../components/ToolbarTopside";
import { GameRules } from '../components/GameRules';

// import useFetchEachGameInfo from '../hooks/useFetchEachGameInfo';
import fetchEachGameInfo from '../gameAPI/fetchEachGameInfo';


const GameDetail = () => {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId');
  const [game, setGame] = useState([]);
  const [gameImage, setGameImage] = useState('');

  useEffect (() => {
    if (gameId) {
      fetchEachGameInfo(gameId)
        .then((gameInfo) => {
          setGame(gameInfo);
          setGameImage(`${process.env.PUBLIC_URL}/assets/GameImage/${gameId}`);
        })
        .catch((error) => console.error('error :', error.message))
        .finally(() => {
          window.scrollTo(0, 0);
        });
    }
  }, [gameId])

  useEffect (() => {
    console.log(gameId,"의 게임 이미지 경로는 = ",gameImage)
  }, [gameImage])

  const [selected, setSelected] = useState('rule')

  // 게임 난이도 아이콘
  const difficultyIcons = Array.from({ length: game.game_difficulty }, (_, index) => (
    <DifficultyIcon key={index}>
      <FaFire style={{ fontSize: '15px', color: 'red' }} />
    </DifficultyIcon>
  ));

  return (
    <Container>
      {game &&
      <>
      <ToolbarTopSide />
      <PictureContainer>
        <BackGroundImage src={gameImage} alt={game.game_name} />
        <InfomationContainer>
          <VerticalContainer>
            <MainImage src={gameImage} alt={game.game_name} />
            <DifficultyContainer>
              {/* <H5>난이도 :{difficultyIcons}</H5> */}
              <H5>난이도 : </H5>
              {difficultyIcons}
            </DifficultyContainer>
          </VerticalContainer>
          <TextInformationContainer>
            <H2>{game.game_name}</H2>
            <H3>{game.game_feature}</H3>
            <EtcInfomationContainer>
              <H5>게임 분류 : {game.game_category}</H5>
            </EtcInfomationContainer>
          </TextInformationContainer>
          
        </InfomationContainer>
      </PictureContainer>
      <IconContainer>
        <EachIconContainer>
          <AiOutlinePlus style={{ color: '#f3f3f3', fontSize: '42px' }}/>
          <H5>게임박스에 추가</H5>
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
          <>
          {game.game_video ? (
            <video width="100%" height="auto" controls>
              <source src={game.game_video} type="video/mp4" />
              영상을 재생할 수 없습니다.
            </video>
          ) : (
            <H4>참고 영상이 없습니다.</H4>
          )}
          </>
        )}
      </GameInfoTab>
      </>
      }
    </Container>
  );
}

export default GameDetail;

const Container = styled.div`
  background-color: #222222;
`

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  overflow: hidden;
  position: relative;
`

const BackGroundImage = styled.img`
  width: 100%;
  object-fit: cover; // 자르기
  object-position: center; // 확인 필요
  filter: blur(5px) brightness(0.8);
  position: absolute;
`

const InfomationContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  // background-color: red;
  padding: 0 0 3% 4%;
`

const VerticalContainer = styled.div`
  flex-direction: column;
`

const MainImage = styled.img`
  width: 6rem;
  height: 6rem;
  border: 2px solid #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const TextInformationContainer = styled.div`
  height: auto;
  padding: 1% 6%;
  aling-items: flex-end;
`

const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const DifficultyIcon = styled.div`
  margin: 0 2%
`;

const EtcInfomationContainer = styled.div`
  display: row;
  width: auto;
`

const IconContainer = styled.div`
  height: 100px;
  padding: 2% 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: green;
`

const EachIconContainer = styled.div`
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

// 글씨
const H2 = styled.h2`
  color: white;
  font-size: 25px;
  margin: 3% 0;
`;

const H3 = styled.h3`
  color: #f3f3f3;
  font-size: 16px;
  margin: 0;
`

const H4 = styled.h4`
  color: #222222;
  font-size: 14px;
  margin: 3% 0 0 0;
`

const H5 = styled.h5`
  font-size: 12px;
  color: #f3f3f3;
  margin: 2% 0 0 0;
`