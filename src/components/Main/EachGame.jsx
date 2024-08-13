import React, { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addGame, removeGame, selectGame } from '../../redux/actions';

// 개별 게임 소개
export const EachGame = ({ game, index, checkbox, numbering }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inBoxGames, setInBoxGames] = useState([]);

  const handleGoDetail = () => {
    navigate(`/GameDetail?gameId=${game.game_id}`);
  };

  const handleButtonClick = () => {
    if (inBoxGames.includes(game.game_id)) {
      handleRemoveGame(game.game_id);
    } else {
      handleAddGame(game.game_id);
    }
  };

  const handleAddGame = (gameId) => {
    setInBoxGames(prevGames => [...prevGames, gameId]);
    dispatch(addGame(game));
  };

  const handleRemoveGame = (gameId) => {
    setInBoxGames(prevGames => prevGames.filter(g => g !== gameId));
    dispatch(removeGame(gameId));
  };

  const handleCheckBoxClick = () => {
    if (inBoxGames.includes(game.game_id)) {
      setInBoxGames(prevGames => prevGames.filter(g => g !== game.game_id));
    } else {
      setInBoxGames(prevGames => [...prevGames, game.game_id]);
    }
    dispatch(selectGame(game))
  }

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
        {checkbox && (
          <CheckboxButton
            isSelected={inBoxGames.includes(game.game_id)}
            onClick={() => handleCheckBoxClick(game.game_id)}
          >
          ✓
          </CheckboxButton>
        )}
        {numbering && (
          <Number>{ index }</Number>
        )}
        <ImageContainer>
          <GameImage src={`assets/GameImage/${game.game_id}.png`} alt={game.game_id}/> 
        </ImageContainer>
        <TextContainer onClick={handleGoDetail}>
          <InformationContainer>
            <TitleContainer>
              <H3>{ game.game_name }</H3>
            </TitleContainer>
            <DifficultyContainer>
              {difficultyIcons}
            </DifficultyContainer>
          </InformationContainer>
          <InformationContainer>
            <H4>{game.game_feature}</H4>
          </InformationContainer>
        </TextContainer>
        {!numbering && 
          <ButtonContainer>
          {checkbox ? (
            <DeleteButton
              onClick={()=> handleRemoveGame(game.game_id)}>
              X
            </DeleteButton>
          ): (
             <AddButton
              isSelected={inBoxGames.includes(game.game_id)}
              onClick={() => handleButtonClick(game.game_id)}
              >
              {inBoxGames.includes(game.game_id) ? '✓' : '+'}
              </AddButton>
          )}
          </ButtonContainer>
        }
      </>
      }  
    </Container>
  );
};

const Container = styled.div`
  // background-color: yellow;
  position: relative;   
  width: 100%; 
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
  width: 10%;   
  aspect-ratio: 1 / 1;
  display: flex;   
  align-items: center;   
  justify-content: center;   
  font-size: 22px;   
  background-color: ${(props) => (props.isSelected ? '#645FFF' : 'transparent')};
  border: ${(props) => (props.isSelected ? '2px solid #645FFF' : '2px solid #ffffff')};
`

const Number = styled.h4`
  margin: 0 5%;
  color: #F8F8F8;
`

const ImageContainer = styled.div` 
  width: 20%;   
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GameImage = styled.img`
  width: 100%;
`

const TextContainer = styled.div`  
  display: flex;   
  flex-direction: column;   
  justify-content: center;   
  height: 70%;  
  width: 75vw;
  padding: 3%;
`

const InformationContainer = styled.div`
  display: flex;   
  flex-direction: row;   
  align-items: center;   
  height: 50%;  
  margin: 2% 0;
`

const TitleContainer = styled.div`
  width: auto;

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
  display: flex;
  flex-direction: row; 
  width: auto;
  margin: 0 3%;
`

const DifficultyIcon = styled.div`
  margin-right: 1px;
`;

const ButtonContainer = styled.div`
  display: flex;   
  flex-direction: column;   
  justify-content: center;   
  width: 10%;
  // background-color: pink;
`

const AddButton = styled.button`
  color: white;
  border: 2px solid #ffffff;
  border-radius: 10%;
  width: 100%;
  aspect-ratio: 1 / 1;
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