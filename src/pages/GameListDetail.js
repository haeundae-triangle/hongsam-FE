import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

import ToolbarTopSide from "../components/ToolbarTopside";
import { Games } from "../components/Main/Games"

import { useSearchParams } from 'react-router-dom';
import fetchEachServiceBoxInfo from '../gameAPI/fetchEachServiceBoxInfo';


const GameListDetail = () => {
  const [searchParams] = useSearchParams();
  const boxId = searchParams.get('boxId');
  const [box, setBox] = useState([]);
  const [boxImage, setBoxImage] = useState('');

  useEffect (() => {
    if (boxId) {
      fetchEachServiceBoxInfo(boxId)
        .then((boxInfo) => {
          setBox(boxInfo)
          setBoxImage(`assets/GameBoxImage/${boxId}.png`)
        })
        .catch((error) => console.error('error :', error.message))
        .finally(() => {
          window.scrollTo(0, 0);
        });
    }
  }, [boxId])


  return (
  <Container>
    <ToolbarTopSide />
    <PictureContainer>
        <BackGroundImage src={boxImage} alt={box.playlist_name} />
        <InfomationContainer>
          <VerticalContainer>
            <MainImage src={boxImage} alt={box.playlist_name} />
          </VerticalContainer>
          <TextInformationContainer>
            <H2>{box.playlist_name}</H2>
            <H3>{box.playlist_description}</H3>
          </TextInformationContainer>        
        </InfomationContainer>
      </PictureContainer>
    <IconContainer>
      <EachIconContainer>
        <AiOutlinePlus style={{ color: '#f3f3f3', fontSize: '42px' }}/>
        <H5>내 리스트에 추가</H5>
      </EachIconContainer>
      <EachIconContainer>
        <AiOutlineHeart style={{ color: '#f3f3f3', fontSize: '42px' }} />
        <H5>좋아요</H5>
      </EachIconContainer>
      <EachIconContainer>
        <AiOutlineShareAlt style={{ color: '#f3f3f3', fontSize: '42px' }}/>
        <H5>친구에게 공유</H5>
      </EachIconContainer>
    </IconContainer>
    <GamesContainer>
      <Games checkbox={false}/>
    </GamesContainer>
  </Container>
  );
}

export default GameListDetail;

const Container = styled.div`
  background-color: #222222;
`

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  overflow: hidden;
  position: relative;
`

const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 자르기
  object-position: center; // 확인 필요
  filter: blur(5px) brightness(0.8);
  position: absolute;
`

const InfomationContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  padding: 0 0 3% 4%;
`

const VerticalContainer = styled.div`
  flex-direction: column;
`

const MainImage = styled.img`
  width: 6rem;
  height: 6rem;
  border: 2px solid #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const TextInformationContainer = styled.div`
  height: auto;
  padding: 1% 6%;
  align-items: flex-end;
`

const InformationContainer = styled.div`
  height: auto;
  padding: 1% 6%;
`

const H2 = styled.h2`
  color: white;
  font-size: 25px;
  margin: 3% 0;
`;

const H3 = styled.h4`
  color: #f3f3f3;
  font-size: 16px;
  margin: 0;
`

const EtcInfomationContainer = styled.div`
  display: row;
  width: auto;
`

const IconContainer = styled.div`
  height: 100px;
  padding: 1% 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EachIconContainer = styled.div`
  width: 25%;
  text-align: center;
`

const H5 = styled.h5`
  font-size: 12px;
  color: #f3f3f3;
  margin: 10% 0 0 0;
`

const GamesContainer = styled.div`
  padding: 0 5%;
`

