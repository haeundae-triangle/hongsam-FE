import React from 'react';
import { FaFire } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 개별 게임 소개 
export const EachGame = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/GameDetail')
  };

  return (
    // TODO : 버튼 누르고 선택 후 이동하도록 수정
    <Container onClick={handleClick}>
      <ImageContainer>
      </ImageContainer>
      <TextContainer>
        <InfomationContainer>
          <TitleContainer>
            <H3>Game Title</H3>
          </TitleContainer>
          <DifficultyContainer>
          <FaFire style={{ fontSize: '15px', color: 'red' }} />
          </DifficultyContainer>
          <GameTagContainer>
            <H4>Game tag</H4>
          </GameTagContainer>
        </InfomationContainer>
        <InfomationContainer>
          <H4>A description of the game</H4>
        </InfomationContainer>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  // background-color: green;
  position: relative;
  width: 90vw;
  height: 13vw;
  display: flex;
  flex-direction: row;
  margin: 3% 0;
`;

const ImageContainer = styled.div`
  background-color: yellow;
  width: 13vw;
  height: 13vw;
`

const TextContainer = styled.div`
  // background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 75vw;
  padding: 3%;
`

const InfomationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
`

const TitleContainer = styled.div`
  width: 20%;
`

const DifficultyContainer = styled.div`
  // background-color: gray;
  width: 65%;
`

const GameTagContainer = styled.div`
  width: 15%;
`

const H3 = styled.h3`
  color: #f3f3f3;
  font-size: 16px;
`

const H4 = styled.h4`
  color: #565656;
  font-size: 14px;
  margin: 0;
`