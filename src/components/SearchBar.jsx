import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ initialUserInput = '', onUserInputChange }) => {
  const [userInput, setUserInput] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setUserInput(initialUserInput);
  }, [initialUserInput]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    navigate("/Search", { state: { userInput } });
    onUserInputChange(userInput)
  };

  const handleClear = () => {
    setUserInput('');
    onUserInputChange('');
  };

  return (
    <ContainerSearchBar onSubmit={handleSubmit}>
      <SearchBarInput
        type="text"
        value={userInput}
        // onChange={handleChange}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="게임을 검색해봐! 홍삼이 가르쳐줄게!"
      />
      <ButtonWrapper>
        {userInput && userInput === initialUserInput ? (
          <DeleteButton type="button" onClick={handleClear}>
            X
          </DeleteButton>
        ) : (
          <SubmitButton type="submit">
            <Search size={16} />
          </SubmitButton>
        )}
      </ButtonWrapper>
    </ContainerSearchBar>
  );
};

const ContainerSearchBar = styled.form`
  width: 90vw;
  height: 60px;
  margin: 2% 5vw;
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

