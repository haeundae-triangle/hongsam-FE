import { Person, BoxSeam, Bell } from 'react-bootstrap-icons';
import React from 'react';
import mainLogo from '../../assets/2dLogo.png' ;
import styles from './Icons.module.css';

const BUTTON_ICON_SIZE = 15;

export const LogoIcon = () => {
    return (
      <a href='/' className={styles.link_logo}>
        <img 
            id={styles.topMenuLogo}
            src={mainLogo} 
            alt="로고 아이콘"
        />
      </a>
    )
  }

export const CartIcon = () => {
return (
    <a href='/' className={styles.link_cart}>
        <BoxSeam 
            size={BUTTON_ICON_SIZE}
            color='white'
            />
    </a>
)
}

export const MymenuIcon = () => {
return (
    <a href='/' className={styles.link_mymenu}>
        <Person 
        size={BUTTON_ICON_SIZE}
        color='white'
        />
    </a>
)
}

export const AlarmIcon = () => {
return (
    <button className={styles.btn_alarm}>
        <Bell 
        size={BUTTON_ICON_SIZE}
        color='white'
        />
    </button>
)
}



