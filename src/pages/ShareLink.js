import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { Games } from '../components/Main/Games'

const GameBox = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <Container>
      <H2>공유 페이지</H2>
    </Container>
  );
}
    
export default GameBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222222;
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`