import React, { useState } from 'react';
import styled from 'styled-components'
import { EachGame } from './EachGame';

export const Games = ({ title, brief, checkbox, numbering }) => {
  const [games, setGames] = useState(['Game1', 'Game2', 'Game3', 'Game4', 'Game5'])

  const apiUrl = process.env.REACT_APP_API_ENDPOINT

  fetch(`${apiUrl}/api/games/top10`)
    .then(res => {
      if (!res.ok) {
        throw new Error('실패');
      }
      return res.json();
    })
    .then(data => {
      console.log('성공:', data);
    })
    .catch(err => {
      console.error('Error:', err);
    });

  // TODO : useEffect 추가

  return (
    <Container>
      {!checkbox && (
      <TitleContainer>
        {title && <H2>{ title }</H2>}
        {brief && <H3>{ brief }</H3>} 
      </TitleContainer>
      )}
      <EachGames>
        {games.map((game, index) => (
          <EachGame key={index} index={index + 1} title={game} checkbox={checkbox} numbering={numbering}/>
        ))}
      </EachGames>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: auto;;
`

const TitleContainer = styled.div`
  height: auto;;
`

const H2 = styled.h2`
  color: #f3f3f3;
  font-size: 25px;
  margin: 2% 0 0 0;;
`  

const H3 = styled.h3`
  color: #f8f8f8;   
  font-size: 16px;
`

const EachGames = styled.div`
  display: flex;   
  flex-direction: column;   
  width: 100%;   
  height: auto;;
`  