import React, { useState } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import ToolbarTopSide from "../components/ToolbarTopside";
import { SearchBar } from "../components/SearchBar";

const Search = () => {
  const location = useLocation();
  const { searchTerm } = location.state;
  const [searchWord, setSearchWord] = useState(searchTerm);

  return (
    <Container>
      {/* MakeLink/TopBar 외부로 빼서 가져오기 */}
      <SearchBar initialSearchTerm={searchTerm} />
      <HistoryContainer>
        <H3>최근 검색어</H3>
      </HistoryContainer>
      <RecommendCointainer>
        <H3>추천 게임</H3>
      </RecommendCointainer>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  background-color: #222222;
`

const HistoryContainer = styled.div`
  height: auto;
  min-height: 80px;
  margin: 6%;
`

const RecommendCointainer = styled.div`
  height: auto;
  margin: 6%;
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`

const H3 = styled.h4`
  color: #645FFF;
  font-size: 16px;
  margin: 0;
`