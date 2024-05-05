import React, { useState } from 'react';
import styled from 'styled-components'
import { Search } from 'react-bootstrap-icons';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log(searchTerm); // Logs search term in console
    setSearchTerm(''); // Initializes placeholder after submission
  };

  return (
    <ContainerSearchBar onSubmit={handleSubmit}>
      <SearchBarInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="게임을 검색해봐! 홍삼이 가르쳐줄게!"
      />
      <ButtonWrapper>
        <SubmitButton><Search /></SubmitButton>
      </ButtonWrapper>
    </ContainerSearchBar>
  );
};

const ContainerSearchBar = styled.form`
    width: 90vw;
    height: 60px;
    margin-right: 5vw;
    margin-left: 5vw;
    display: flex;
    align-items: center;
    position: relative; /* Added to position button relative to the search bar */
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
    border-radius: 50%; /* Makes button circular */
    padding: 10px; /* Adds padding to button */
    background-color: transparent;
    color: #aeaeae;
    font-size: 13px;
`;