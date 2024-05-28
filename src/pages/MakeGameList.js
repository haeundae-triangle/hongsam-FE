// import { useEffect, useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
import { SearchBar } from "../components/SearchBar";
import { InList } from "../components/MakeGameList/InList"
import { Games } from "../components/Main/Games"
import styled from 'styled-components';


const MakeGameList = () => {
    // const [addList, setAddList] = useState([]);

    // TODO
    // 게임 클릭 시, addList에 추가, InList에 정보 넘겨주는 로직 추가할 것

    return (
    <Container>
      <ToolbarTopSide />
      <InList />
      <SearchBar />
      <GameContainer>
        <Games />
      </GameContainer>
    </Container>
    );
}

export default MakeGameList;

const Container = styled.div`
  background-color: #222222;
`

const GameContainer = styled.div`
  margin: 0 5%;
`
