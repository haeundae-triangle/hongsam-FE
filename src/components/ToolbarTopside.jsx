import React from 'react';
import styled from 'styled-components'
import {LogoIcon, CartIcon, AlarmIcon, MymenuIcon} from './Icons/Icons'


const ToolbarTopSide = () => {

  return (
    <Navbar>
      <div id='navbarLogo'>
        <LogoIcon />
      </div>
      <NavbarRightMenu className='navbarRightMenu'>
        <MenuItem id='topCartArea'><CartIcon /></MenuItem>
        <MenuItem id='topAlarmArea'><AlarmIcon /></MenuItem>
        <MenuItem id='topMymenuArea'><MymenuIcon /></MenuItem>
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
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  cursor: pointer; /* 확인용 */
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.15);
  }
`;

export default ToolbarTopSide;