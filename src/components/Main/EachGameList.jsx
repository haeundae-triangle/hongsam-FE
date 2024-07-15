import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

// 개별 게임 리스트 소개
export const EachGameList = (props) => {
  const { info } = props;
  console.log(info);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('게임리스트 아이디 확인하자' + info.playlist_id)
    navigate(`/GameListDetail?boxId=${info.playlist_id}`);
  };

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
      </ImageContainer>
      <TextContainer>
        <H3>{info.playlist_name}</H3>
        <H4>Writer : 홍삼</H4>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 25vw;
  height: 30vw;
  padding: 0 4% 0 0;
`;

const ImageContainer = styled.div`
  background-color: red;
  width: 25vw;
  height: 25vw;
`

const TextContainer = styled.div`
  margin: 0 2%;
`

const H3 = styled.h3`
  color: #f3f3f3;
  font-size: 16px;
  margin: 10% 0 0 0;
`

const H4 = styled.h4`
  color: #565656;
  font-size: 14px;
  margin: 3% 0 0 0;
`