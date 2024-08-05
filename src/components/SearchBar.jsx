import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { Games } from './Main/Games';

export const SearchBar = (props) => {
  const {allGames} = props;
  const [userInput, setUserInput] = useState('');
  const [searchedTerm, setSearchedTerm] = useState('')
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchedTerm(userInput);
    console.log(userInput);
  };

  const handleClear = () => {
    setUserInput('');
    setSearchedTerm('')
    setFilteredGames([]);
  };

  useEffect(() => {
    const newFilteredGames = allGames.filter((game) =>
      game.game_name.toLowerCase().includes(searchedTerm.toLowerCase())
    );
    if (newFilteredGames.length === 0) {
      setFilteredGames([]);
    } else {
      setFilteredGames(newFilteredGames);
    }
    if (searchedTerm === '') {
      setFilteredGames([]);
    }
  }, [searchedTerm])

  return (
    <Container>
      <ContainerSearchBar onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="게임을 검색해봐! 홍삼이 가르쳐줄게!"
        />
        <ButtonWrapper>
          {userInput !== searchedTerm ? (
            <SubmitButton type="submit">
              <Search size={16} />
            </SubmitButton>
          ) : (
            <DeleteButton type="button" onClick={handleClear}>
              X
            </DeleteButton>
          )}
        </ButtonWrapper>
      </ContainerSearchBar>
      <GamesContainer>
        {filteredGames.length > 0 ? (
          <Games games={filteredGames} />
        ):(
          userInput && searchedTerm && <H3>검색어와 일치하는 게임이 없습니다.</H3>
        )}
      </GamesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`

const ContainerSearchBar = styled.form`
  width: 95%;
  height: 60px;
  margin: 2% auto;
  display: flex;
  align-items: center;
  position: relative; 
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 2vw;
  transform: translateY(-50%);
`;

const SearchBarInput = styled.input`
  height: 35px;
  width: 90vw;
  margin: 0;
  border: 1px solid #aeaeae;

  background-color: transparent;
  border-radius: 10px;

  color: #aeaeae;
  font-size: 13px;

  padding-left: 3vw;
  text-align: left;
`;

const SubmitButton = styled.button`
  border-radius: 50%;
  padding: 5px; 
  background-color: transparent;
  color: #aeaeae;
  font-size: 13px;
  border: none;
`;

const DeleteButton = styled.button`
  padding: 5px;
  background-color: transparent;
  color: #aeaeae;
  font-size: 16px;
  border: none;
  line-height: 1;
`;

const GamesContainer = styled.div`
  margin: -3% 6% 0 6%;
`

const H3 = styled.h3`
  color: #f8f8f8;
  font-size: 16px;
  text-align: center;
  margin: 5% 0;
`