import { useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
// import { SearchBar } from "../components/SearchBar";
// import { InBox } from "../components/GameBox/InBox"
import { Games } from "../components/Main/Games"
import styled from 'styled-components';

const GameBox = () => {
const [selectedList, setSelectedList] = useState([]);

return (
  <Container>
    <ToolbarTopSide />
    {/* <InBox /> */}
    {/* <SearchBar /> */}
    <GameContainer>
      <Games checkbox={true}/>
    </GameContainer>
    <ShareContainer>
      <H2>총 {selectedList.length}개 게임 공유하기</H2>
    </ShareContainer>
  </Container>
);
}

export default GameBox;

const Container = styled.div`
  background-color: #222222;
`

const GameContainer = styled.div`
  margin: 0 5%;
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #645FFF;
  height: 50px;
  margin-top: 3%;
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`