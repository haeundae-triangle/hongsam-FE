import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopBar from '../components/TopBar';
import { Games } from "../components/Main/Games"
import styled from 'styled-components';

const GameBox = () => {
const savedList = useSelector((state) => state.games.savedGames);
const selectedList = useSelector((state) => state.games.selectedGames);


const navigate = useNavigate();
const handleClick = () => {
  navigate('/MakeLink');
};

// 모든 게임 seletedList에 추가할 함수
const handleCheckAllGame = () => {}

return (
  <Container>
    <ContentsContainer>
      <TopBar title={"게임 박스"} brief={"내가 고른 게임들을 친구들과 공유해봐요"}/>
      <GameContainer>
        <Games games={savedList} checkbox={true}/>
      </GameContainer>
    </ContentsContainer>
    <>
      <TotalCheckContainer>
        <AllCheckButton>✓</AllCheckButton>
        <H3>전체 선택</H3>
      </TotalCheckContainer>
      <ShareContainer onClick={handleClick}>
        <H2>총 {selectedList.length}개 게임 공유하기</H2>
      </ShareContainer>
    </>
  </Container>
);
}

export default GameBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #222222;
  min-height: 98vh;
  width: 100%;
`

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

const GameContainer = styled.div`
  width: 95%;
  margin: 0 5%;
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #645FFF;
  height: 50px;
`

const TotalCheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1% 5%;
  align-items: center;
`

const AllCheckButton = styled.button`
  color: white;   
  border: 2px solid #ffffff;   
  border-radius: 10%;   
  margin: 0 5% 0 0;   
  width: 30px;   
  height: 30px;   
  display: flex;   
  align-items: center;   
  justify-content: center;   
  font-size: 22px;   
  background-color: ${(props) => (props.isSelected ? '#645FFF' : 'transparent')};   
  border: ${(props) => (props.isSelected ? '2px solid #645FFF' : '2px solid #ffffff')};
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`

const H3 = styled.h3`
  color: #f3f3f3;   
  font-size: 16px;
  justify-align: center;
`