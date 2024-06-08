import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Games } from '../components/Main/Games'

const GameBox = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <Container>
      <TopBar>
        <H3 onClick={handleBackClick} >{"<"}</H3>
        <H3>링크 공유하기</H3>
      </TopBar>
      <InfoContainer>
        <TextContainer>
          <H3>게임박스 이름</H3>
          <H5>* 필수</H5>
        </TextContainer>
        <Input placeholder="게임박스의 이름을 입력하세요" />
      </InfoContainer>
      <InfoContainer>
        <H3>게임박스 간단 설명</H3>
        <Input placeholder="게임박스를 설명해주세요" />
      </InfoContainer>
      <InfoContainer>
        <TextContainer>
          <H3>게임박스 비밀번호</H3>
          <H5>* 필수 : 추후 게임박스 수정을 위해 필요해요! 꼭 기억하세요!</H5>
        </TextContainer>
        <Input placeholder="게임박스의 비밀번호를 입력해주세요" />
      </InfoContainer>
      <InfoContainer>
        <H3>작성자 이름</H3>
        <Input placeholder="표시될 작성자 이름을 입력해주세요" />
      </InfoContainer>
      <H3>총 N개 게임</H3>
      <ListContainer>
      </ListContainer>
      <ShareContainer>
        <H2>공유 링크 생성</H2>
      </ShareContainer>
    </Container>
  );
}
    
export default GameBox;

const Container = styled.div`
  height: auto;
  background-color: #222222;
`

const TopBar = styled.div`
  height: 50px;
  background-color: #3D3D3D;
  display: flex;
  align-items: center;
  
  & > h3 {
    margin: 0 0 0 5%;
  }
`

const InfoContainer = styled.div`
  height: auto;
  margin: 3% 3%;
`

const TextContainer = styled.div`
  display: flex;
`

const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 3% 0;
  border: solid 2px #AEAEAE;
  background-color: #3D3D3D; 
  box-sizing: border-box;
`

const ListContainer = styled.div`
  margin: 2% auto;
  constent-align: center;
  border: solid 1px #F8F8F8;
  width: 97%;
  height: 200px;
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #645FFF;
  width: 100%;
  height: 50px;
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
  margin: 0 1%;
`

const H5 = styled.h5`
  font-size: 12px;
  color: #D32F2F;
  margin: 1% 0 0 1%;
`