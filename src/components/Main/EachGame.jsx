import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 개별 게임 소개
export const EachGame = ({ checkbox }) => {
const navigate = useNavigate();
const [selectedGames, setSelectedGames] = useState([]);

const handleClick = () => {
  navigate('/GameDetail')
};

const handleAddGame = (gameName) => {
  setSelectedGames((prevGames) => {
    if (prevGames.includes(gameName)) {
      return prevGames.filter(g => g !== gameName);
    } else {
      return [...prevGames, gameName]
    }
  });
};

const handleDeleteGame = (gameName) => {
  setSelectedGames((prevGames) => prevGames.filter(g => g !== gameName))
}

return (
// TODO : 버튼 누르고 선택 후 이동하도록 수정
  <Container>
    {checkbox && (
      <CheckboxButton
      isSelected={selectedGames.includes('GameTitle')}
      onClick={() => handleAddGame('GameTitle')}>
      ✓
      </CheckboxButton>
    )}
    <ImageContainer></ImageContainer>
    <TextContainer>
    <InfomationContainer>
      <TitleContainer onClick={handleClick}>
        <H3>Game Title</H3>
      </TitleContainer>
      <DifficultyContainer>
        <FaFire style={{ fontSize: '15px', color: 'red' }} />
      </DifficultyContainer>
    </InfomationContainer>
    <InfomationContainer>
      <H4>A description of the game</H4>
    </InfomationContainer>
    </TextContainer>
    <ButtonContainer>
    {checkbox ? (
      <DeleteButton
      onClick={()=> handleDeleteGame('GameTitle')}>
      X
      </DeleteButton>
    ): (
      <AddButton
      isSelected={selectedGames.includes('GameTitle')}
      onClick={() => handleAddGame('GameTitle')}
      >
      {selectedGames.includes('GameTitle') ? '✓' : '+'}
      </AddButton>
    )}
    </ButtonContainer>
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
  align-items: center;   
  margin: 3% 0;
`

const CheckboxButton = styled.button`
  color: white;   
  border: 2px solid #ffffff;   
  border-radius: 10%;   
  margin: 0 5% 0 0;   
  width: 35px;   
  height: 30px;   
  display: flex;   
  align-items: center;   
  justify-content: center;   
  font-size: 22px;   
  background-color: ${(props) => (props.isSelected ? '#645FFF' : 'transparent')};   
  border: ${(props) => (props.isSelected ? '2px solid #645FFF' : '2px solid #ffffff')};
`

const ImageContainer = styled.div`
  background-color: #686868;   
  width: 18vw;   
  height: 13vw;
`

const TextContainer = styled.div`
  // background-color: pink;   
  display: flex;   
  flex-direction: column;   
  justify-content: center;   
  height: 70%;   
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
  width: 30%;

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

const DifficultyContainer = styled.div`
  // background-color: gray;   
  width: 65%;
`

const ButtonContainer = styled.div`
  display: flex;   
  flex-direction: column;   
  justify-content: center;   
  width: 15%;
`

const AddButton = styled.button`
  color: white;
  border: 2px solid #ffffff;
  border-radius: 10%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background-color: ${(props) => (props.isSelected ? '#645FFF' : 'transparent')};
  border: ${(props) => (props.isSelected ? '2px solid #645FFF' : '2px solid #ffffff')};

  &:hover {
  // background-color: #4a3ebf;
  }
`

const DeleteButton = styled.button`
  color: #F8F8F8;   
  background: none;   
  border: none;   
  font-size: 22px;;
`