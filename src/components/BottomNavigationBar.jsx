import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { FaHome, FaCompass, FaBoxOpen } from 'react-icons/fa';
import Modal from './Modal.tsx';

const BottomNavigationBar = () => {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();
  const games = useSelector((state) => state.games.savedGames);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedPage('Home');
  }

  // Search 페이지 임시 코드
  const handleClick = (page) => {
    setSelectedPage(page)
    if (page !== 'Search') {
      navigate(`/${page}`); 
    } else {
      openModal();
    }
  };

  return (
    <>
      <NavContainer>
        {/* <NavItem onClick={() => handleClick('Home')} isSelected={selectedPage === 'Home'}> */}
        <NavItem>
          <FaHome size={22} />
          <H5>홈</H5>
        </NavItem>
        <NavItem onClick={() => handleClick('Search')} isSelected={selectedPage === 'Search'}>
          <FaCompass size={22} />
          <H5>탐색</H5>
        </NavItem>
        <NavItem onClick={() => handleClick('GameBox')} isSelected={selectedPage === 'GameBox'}>
          <IconWrapper>
            <FaBoxOpen size={22} />
            {games.length > 0 && <Badge>{games.length}</Badge>}
          </IconWrapper>

          <H5>게임박스</H5>
        </NavItem>
      </NavContainer>
      {isModal && <Modal handleClose={closeModal} />}
    </>
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
  height: 10%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 12.5%;
  box-sizing: border-box;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? '#645FFF' : '#ffffff')};
  font-size: 16px;
  cursor: pointer;
  width: 35%;
  text-align: center;
  padding: 10px 0;

  svg {
    color: ${({ isSelected }) => (isSelected ? '#645FFF' : '#f8f8f8')};
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.div`
  display: flex;
  position: absolute;
  top: -0.3rem;
  right: -0.5rem;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
`;

const H5 = styled.h5`
  color: #f8f8f8;
  font-size: 11px;
  margin: 5% 0 0 0;
`;
