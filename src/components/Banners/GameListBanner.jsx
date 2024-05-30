import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import GameBannerImage from '../../assets/GameBannerImage.png';
import { CaretRightFill } from 'react-bootstrap-icons';

// 게임 리스트 만들러가기 고정 베너
export const GameListBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/GameBox');
  };

  return (
    <Container>
      <BannerContainer onClick={handleClick}>
        <ImageContainer>

        </ImageContainer>
        <TextContainer>
          <H4>홍삼으로 같이 할 게임 공유하고, 함께 술자리 즐겨요</H4>
          <H3>홍삼과 함께라면, 어떤 술게임도 어렵지 않아요!</H3>
        </TextContainer>
        <IconContainer>
          <CaretRightFill size={24} color="#222222"/>
        </IconContainer>
      </BannerContainer>
    </Container>
  );
};

const Container = styled.div`
  // background-color: red;
  position: relative;
  width: 100vw;
  height: 180px;
`;

const BannerContainer = styled.div`
  background-color: #f8f8f8;
  margin: 2% auto;
  width: 90vw;
  height: 100px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  width: 20%;
  background-image: url('${GameBannerImage}');
  background-size: cover;
  background-position: center;
`

const TextContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 4.5% 0;
  // background-color: red;
`

const H4 = styled.h4`
  color: #FF5171;
  font-size: 14px;
  text-align: center;
  margin: 2% 0;
`;

const H3 = styled.h3`
  color: #222222;
  font-size: 16px;
  text-align: center;
  margin: 3% 0;
`;

const IconContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`