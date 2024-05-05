import React, { useState } from 'react';
import styled from 'styled-components'
import { EachGame } from './EachGame';

// 게임 소개
export const Games = () => {
  const [listTag, setListTag] = useState('어서와, 술자리는 처음이지?')
  const listTags = ['어서와, 술자리는 처음이지?', '너 게임 좀 하냐?', '고수만 덤벼', '노래부르는 게임',
   '아이엠 그라운드 게임', '운빨게임', '두뇌 게임', '순발력 게임', '한명 죽이기 게임', '웃음 참기 게임']

  return (
    <Container>
      <TagContianer>
        {listTags.map((tag, index) => (
          <Tag key={index} onClick={() => setListTag(tag)}>{tag}</Tag>
        ))}
      </TagContianer>
      <TitleContainer>
        <H2>{ listTag }</H2>
      </TitleContainer>
      <EachGames>
        <EachGame />
        <EachGame />
      </EachGames>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: auto;
  padding: 0 5%;
`;

const TagContianer = styled.div`
width: 90vw;
height: auto;
padding: 2% 0;
display: flex;
flex-wrap: wrap;
gap: 10px;
`

const Tag = styled.div`
  color: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #f3f3f3;
`;

const TitleContainer = styled.div`
  height: auto;
`;

const H2 = styled.h2`
  color: #f3f3f3;
  font-size: 25px;
  margin: 2% 0 0 0;
`;

const EachGames = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;