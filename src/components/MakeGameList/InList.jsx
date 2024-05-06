import React from 'react';
import styled from 'styled-components'

// 현재 담은 게임들
export const InList = () => {

  return (
    <Container>
      <H2>현재 담은 게임 목록 구현 공간</H2>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: auto;
`;

const H2 = styled.h2`
  font-size: 20px;
  text-align: center;
  color: white;
`