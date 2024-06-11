import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const TopBar = ({ title, brief }) => {

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  }

  return (
    <Container>
      <TitleContainer>
        <H3 onClick={handleBackPage}>{"<"}</H3>
        <H3>{title}</H3>
      </TitleContainer>
      {brief && 
        <BriefContainer>
          <H4>{brief}</H4>
        </BriefContainer>
      }
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3D3D3D;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`

const BriefContainer = styled.div`
  height: 30px;
`

const H3 = styled.h3`
  font-size: 16px;
  color: #F8F8F8;
  margin-left: 5%;
`

const H4 = styled.h4`
  font-size: 14px;
  color: #F8F8F8;
  margin: 0 0 0 5%;
`