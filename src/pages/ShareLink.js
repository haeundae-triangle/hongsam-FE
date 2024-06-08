import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// 수정 필요
import ShareImage from '../assets/2dLogo.png';
import { FaRegCopy } from 'react-icons/fa'

const GameBox = () => {
  const location = useLocation();
  const { link } = location.state;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link);
    alert("게임박스의 링크가 복사되었습니다.")
  }

  return (
    <Container>
      <StyledImage src={ShareImage} alt="Share Image" />
      <CopyContainer>
        <LinkContainer>
          <H3>{link}</H3>
        </LinkContainer>
        <CopyButton onClick={handleCopyClick} style={{ fontSize: '20px', color: '#F8F8F8' }}>
          <FaRegCopy />
        </CopyButton>
      </CopyContainer>
      <H3>친구들에게 링크를 공유하세요!</H3>
    </Container>
  );
}
    
export default GameBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222222;
`

const StyledImage = styled.img`
  width: 80%;
  height: auto; 
`

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  // 수정할 곳
  justify-content: start;
  width: 80%;
  height: 5%;
  border: solid 2px #F8F8F8;
  margin-bottom: 3%;
`

const LinkContainer = styled.div`
  width: 92%;
`

const CopyButton = styled.button`
  display: flex;
  align-items: center;
`

const H3 = styled.h3`
  font-size: 16px;
  color: #F8F8F8;
  margin: 0 3%;
  overflow: hidden;
  // text-overflow: ellipsis;
`