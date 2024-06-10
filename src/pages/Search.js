import React, { useState } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const { searchTerm } = location.state;
  const [searchWord, setSearchWord] = useState(searchTerm);

  return (
    <Container>
      <H2>{searchWord}</H2>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  background-color: #222222;
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`