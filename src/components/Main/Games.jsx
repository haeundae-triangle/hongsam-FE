import React from 'react';
import styled from 'styled-components'
import { EachGame } from './EachGame';

export const Games = ({ games, title, brief, checkbox, numbering }) => {

  return (
    <Container>
      {!checkbox && (
      <TitleContainer>
        {title && <H2>{ title }</H2>}
        {brief && <H3>{ brief }</H3>} 
      </TitleContainer>
      )}
      <EachGameContainer>
        {games && (games.map((game, index) => (
            <EachGame
              // key={game.game.id || index}
              key={game.game_id}
              index={index + 1}
              game={game}
              checkbox={checkbox}
              numbering={numbering}
            >
            </EachGame>
          )))
        };
      </EachGameContainer>
      {/* <EachGameContainer>
        {games.map((game, index) => (
          <EachGame key={index} index={index + 1} title={game} checkbox={checkbox} numbering={numbering}/>
        ))}
      </EachGameContainer> */}
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

const EachGameContainer = styled.div`
  display: flex;   
  flex-direction: column;   
  width: 100%;   
  height: auto;;
`  