import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRedo } from 'react-icons/fa';

import TopBar from '../components/TopBar';
import { Games } from '../components/Main/Games'

const MakeLink = () => {
  const selectedList = useSelector((state) => state.games.selectedGames);
  const [randomImages, setRandomImages] = useState([]);

  // 백엔드에 넘겨줄 정보
  const [boxImage, setBoxImage] = useState(randomImages[0]);
  const [boxName, setBoxName] = useState('');
  const [information, setInformation] = useState('');
  // const [pin, setPin] = useState('');
  const [userName, setUserName] = useState('');

  const [link, setLink] = useState('templinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplinktemplink');

  // 네비게이션
  const navigate = useNavigate();

  const handleShareClick = () => {
    navigate("/ShareLink", { state: {link} });
  }

  const handleImageClick = (image) => {
    setBoxImage(image);
    console.log('클릭한 이미지 = ', image);
  }

  const handleReloadClick = () => {
    const numbers = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    const selectedNumbers = shuffledNumbers.slice(0, 7);
    const newImages = [...selectedNumbers, 'reload'];
    setRandomImages(newImages);
    setBoxImage(newImages[0]);
  }

  useEffect(() => {
    handleReloadClick();
  }, [])

  useEffect(() => {
    console.log('선택된 이미지 = ', boxImage);
  }, [boxImage])

  return (
    <Container>
      <TopBar title={"링크 공유하기"}/>
      <TextContainer>
          <H3>게임박스 대표 이미지</H3>
        </TextContainer>
      <InfoContainer> 
        <ImageGridContainer>
          {randomImages.map((image, index) => (
            <ImageBox key={index} onClick={() => handleImageClick(image)}>
              {image === 'reload' ? (
                <ReloadBox onClick={handleReloadClick}>
                  <FaRedo style={{ fontSize: '32px', color: '#F8F8F8' }} />
                </ReloadBox>
              ) : (
                <GameBoxImage
                  src={`assets/GameBoxImage/${image}.png`}
                  isSeleted={boxImage == image}
                  alt={image}
                  onClick={handleImageClick}
                />
              )}
            </ImageBox>
          ))}
        </ImageGridContainer>
      </InfoContainer>
      <TextContainer>
        <H3>게임박스 이름</H3>
        <H5>* 필수</H5>
        </TextContainer>
      <InfoContainer>
        <Input
          // placeholder="게임박스의 이름을 입력하세요" 
          value={boxName}
          onChange={(e) => setBoxName(e.target.value)}
        />
      </InfoContainer>
      <H3>게임박스 간단 설명</H3>
      <InfoContainer>
        <Input
          // placeholder="게임박스를 설명해주세요" 
          value={information}
          onChange={(e) => setInformation(e.target.value)}
        />
      </InfoContainer>
      {/* <InfoContainer>
        <TextContainer>
          <H3>게임박스 비밀번호</H3>
          <H5>* 필수 : 추후 게임박스 수정을 위해 필요해요! 꼭 기억하세요!</H5>
        </TextContainer>
        <Input
          // placeholder="게임박스의 비밀번호를 입력해주세요" 
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </InfoContainer> */}
      <H3>작성자 이름</H3>
      <InfoContainer>
        <Input
          // placeholder="표시될 작성자 이름을 입력해주세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </InfoContainer>
      <H3>총 {selectedList.length}개 게임</H3>
      <ListContainer>
        <Games games={selectedList} numbering={true} />
      </ListContainer>
      <ShareContainer onClick={handleShareClick}>
        <H2>공유 링크 생성</H2>
      </ShareContainer>
    </Container>
  );
}
    
export default MakeLink;

const Container = styled.div`
  min-height: 98vh;
  background-color: #222222;
`

const InfoContainer = styled.div`
  height: auto;
  margin: 0 3% 3% 3%;
`

const TextContainer = styled.div`
  display: flex;
`

const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
  margin: 3% auto 5% auto;
  // border: solid 1px #F8F8F8;
  border-radius: 10px;
  width: 97%;
`;

const ImageBox = styled.div`
  position: relative
  background-color: #686868;
  width: 100%;
  height: ${(props) => props.height || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.isSeleted ? 'solid 3px #645FFF' : 'solid 2px #AEAEAE'};
  border-radius: 10px;
  overflow: hidden;
`;

const GameBoxImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ReloadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 3% 0;
  border: solid 2px #AEAEAE;
  border-radius: 10px;
  background-color: #3D3D3D; 
  box-sizing: border-box;
`

const ListContainer = styled.div`
  margin: 2% auto;
  border: solid 1px #F8F8F8;
  border-radius: 10px;
  width: 97%;
  height: auto;
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #645FFF;
  width: 100%;
  height: auto;
  min-height: 50px;
  margin-top: 3%;
`

const H2 = styled.h2`
  color: #F8F8F8;
  font-size: 25px;
  text-align: center;
  justify-align: center;
`

const H3 = styled.h3`
  font-size: 16px;
  color: #F8F8F8;
  margin: 3% 2% 0 5%;
`

const H5 = styled.h5`
  font-size: 12px;
  color: #D32F2F;
  margin: 4% 0 0 1%;
`

const Checkmark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: red;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  z-index: 1;
`;