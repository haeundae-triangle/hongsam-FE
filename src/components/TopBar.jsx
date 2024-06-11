import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const TopBar = ({ title }) => {

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  }

  return (
    <Container>
      <H3 onClick={handleBackPage}>{"<"}</H3>
      <H3>{title}</H3>
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #3D3D3D;
`

const H3 = styled.h3`
  font-size: 16px;
  color: #F8F8F8;
  margin: 0 0 0 5%;
`