import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { FaHome, FaCompass, FaBoxOpen } from 'react-icons/fa';

const BottomNavigationBar = () => {
  const [selectedPage, setSelectedPage] = useState('Home');

  const navigate = useNavigate();

  const handleClick = (page) => {
    setSelectedPage(page)
    if (page !== 'Home') {
      navigate(`/${page}`); 
    }
  };

  return (
    <NavContainer>
      <NavItem onClick={() => handleClick('Home')} isSelected={selectedPage === 'Home'}>
        <FaHome size={22} />
        <H5>홈</H5>
      </NavItem>
      <NavItem onClick={() => handleClick('Search')} isSelected={selectedPage === 'Search'}>
        <FaCompass size={22} />
        <H5>탐색</H5>
      </NavItem>
      <NavItem onClick={() => handleClick('GameBox')} isSelected={selectedPage === 'GameBox'}>
        <FaBoxOpen size={22} />
        <H5>게임박스</H5>
      </NavItem>
    </NavContainer>
  );
}

export default BottomNavigationBar;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #3d3d3d;
  height: 65px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 12.5%
  box-sizing: border-box;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? '#645FFF' : '#ffffff')};
  font-size: 16px;
  cursor: pointer;
  width: 25%;
  text-align: center;
  padding: 10px 0;

  svg {
    color: ${({ isSelected }) => (isSelected ? '#645FFF' : '#f8f8f8')};
  }
`;

const H5 = styled.h5`
  color: #f8f8f8;
  font-size: 11px;
  margin: 5% 0 0 0;
`;
