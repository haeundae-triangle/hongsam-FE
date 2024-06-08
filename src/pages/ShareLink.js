import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const GameBox = () => {
  const location = useLocation();
  const { link } = location.state;

  return (
    <Container>
      <H2>공유 페이지</H2>
      <H5>{link}</H5>
    </Container>
  );
}
    
export default GameBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const H5 = styled.h5`
  font-size: 12px;
  color: #D32F2F;
  margin: 1% 0 0 1%;
`