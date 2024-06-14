import React, { useState } from 'react';
import styled from 'styled-components'
import { Games } from './Games'

// 게임 소개
export const GameFilter = () => {
  const [listTag, setListTag] = useState('노래 부르는 게임')
  const listTags = ['노래 부르는 게임', '아이엠 그라운드 게임', '운빨게임',
   '두뇌 게임', '순발력 게임', '한명 죽이기 게임', '웃음 참기 게임']

  return (
    <Container>
      <TagContianer>
        {listTags.map((tag, index) => (
          <Tag key={index} isSelected={listTag === tag} onClick={() => setListTag(tag)}>{tag}</Tag>
        ))}
      </TagContianer>
      <Games title={listTag}></Games>
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
  color: ${({ isSelected }) => (isSelected ? '#f8f8f8' : '#aeaeae')};
  padding: 8px 15px;
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#645FFF' : '#686868')};
`;