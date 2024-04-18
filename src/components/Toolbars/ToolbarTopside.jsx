import React from 'react';
import {LogoIcon, CartIcon, AlarmIcon, MymenuIcon} from '../Icons/Icons'
import styles from './ToolbarTopside.module.css'




const ToolbarTopSide = () => {

  
  return (
    <header id='navbar' className={styles.navbar}>
      <div id='navbarLogo'>
        <LogoIcon />
      </div>
      <div>

      </div>
      <ul id='navbarRightMenu'>
        <li id='topCartArea'><CartIcon /></li>
        <li id='topAlarmArea'><AlarmIcon /></li>
        <li id='topMymenuArea'><MymenuIcon /></li>
      </ul>
    </header>
  );
};

export default ToolbarTopSide;