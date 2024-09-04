import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {LogoIcon, CartIcon, AlarmIcon, MymenuIcon} from './Icons/Icons'
import { FaHome, FaCompass, FaBoxOpen } from 'react-icons/fa';


const ToolbarTopSide = () => {
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
    <Navbar>
      <div id='navbarLogo'>
        <LogoIcon />
      </div>
      <NavbarRightMenu>
        <FaCompass size={28} onClick={() => handleClick('Search')} isSelected={selectedPage === 'Search'}/>
        <IconWrapper>
          <FaBoxOpen size={28} onClick={() => handleClick('GameBox')} isSelected={selectedPage === 'GameBox'}/>
          {games.length > 0 && <Badge>{games.length}</Badge>}
        </IconWrapper>
      </NavbarRightMenu>
    </Navbar>
  );
};

const Navbar = styled.header`
  background: #222222;
  // backdrop-filter: blur(2px);
  color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  margin: 0 5vw;
  padding: 3% 0;
`;

const NavbarRightMenu = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style: none;
  margin: 1% 2% 0 0;
  padding: 0;
  gap: 1em;
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

export default ToolbarTopSide;