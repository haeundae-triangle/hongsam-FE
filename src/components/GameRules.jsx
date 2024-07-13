import React from 'react';
import styled from 'styled-components'

export const GameRules = (props) => {
  const { game } = props;
  const intro = game.game_intro;
  const rules = game.game_rule

  console.log(intro);
  console.log(rules);
  

  if (!game) return null;
  console.log(game);

  return (
    <Container>
      <IntroContainer>
        <H3>인트로</H3>
        <ContentsContainer>
          <H4>{game.game_intro}</H4>
        </ContentsContainer>
      </IntroContainer>
      <RulesContainer>
        <H3>게임 룰</H3>
        {rules && rules.length > 0 &&
          rules.map((rule) => (
          <ContentsContainer>
          <H4>Stage {rule.stage} : {rule.description}</H4>
        </ContentsContainer>
        ))}
      </RulesContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 96%;
  height: auto;
  margin: 0 2%;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: auto;
`

const RulesContainer = styled.div`
  width: 100%;
  height: auto;
`

const H3 = styled.h3`
  color: #f8f8f8;
  font-size: 16px;
  margin: 10% 0 3% 0;
`

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 1% 3% 4% 3%;
  margin: 0 0 5% 0;
  background-color: #f8f8f8;
  border-radius: 5px;
`

const H4 = styled.h4`
  color: #222222;
  font-size: 14px;
  margin: 3% 0 0 0;
`
