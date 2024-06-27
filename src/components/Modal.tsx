import React from "react";
import styled from 'styled-components';

const Modal = ({ handleClose }) => {

  const handleGoInsta = () => {
    // TODO : instagramAppUrl 추가
    const instagramWebUrl = "https://www.instagram.com/official_hongsam/";

    window.open(instagramWebUrl);
  };

  return (
    <Container>
      <ContentsContainer>

      </ContentsContainer>
      <ButtonContainer>
        <Button onClick={handleGoInsta}>이동하기</Button>
        <Button onClick={handleClose}>닫기</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Modal;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 5%;
  left: 10%;
  border-radius: 20px;
  background-color: #F8F8F8;
  width: 80%;
  height: 90%;
`;

const ContentsContainer = styled.div`
  width: 90%;
  height: 85%;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  flex-direction: row;
  width: 90%;
  height: 10%;
  background-color: #F8F8F8;
`;

const Button = styled.button`
  width: 50%;
  padding: 4%;
  color: #343434;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
`;