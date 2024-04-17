import React from 'react';
import {Person, BoxSeam, Bell} from 'react-bootstrap-icons'
import styles from './ToolbarTopside.module.css'

const ToolbarTopSide = () => {
  return (
    <>
      <ul className={styles.navbar}> 
        <button ><Bell /></button>
        <button ><BoxSeam/></button>
        <button ><Person /></button>
      </ul>
    </>
  );
};

export default ToolbarTopSide;