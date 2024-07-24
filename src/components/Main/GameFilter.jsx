import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { Games } from './Games'
import useFetchTop10 from '../../hooks/useFetchTop10';

// 게임 소개
export const GameFilter = (props) => {
  const {allGames} = props;
  const { top10Games, error, isLoading } = useFetchTop10();
  const [selectedCategory, setSelectedCategory] = useState('아이엠 그라운드 게임')
  const categorys = ['아이엠 그라운드 게임', '노래부르는 게임', '운빨 게임', '두뇌 게임', '순발력 게임', '한명 죽이기 게임', '웃음 참기 게임']

  const filteredGames = useMemo(() => {
    if (!allGames.length) return [];
  
    return allGames.filter(game => game.game_category === selectedCategory);
  }, [allGames, selectedCategory]);

  return (
    <Container>
      <TagContianer>
        {categorys.map((category, index) => (
          <Tag key={index} isSelected={selectedCategory === category} onClick={() => setSelectedCategory(category)}>{category}</Tag>
        ))}
      </TagContianer>
      {filteredGames && <Games games={filteredGames} title={selectedCategory} />}
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