import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styles from '../style/Header.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className={styles.boss}>
    <div className={styles.headerContainer}>
      <Sidebar className={styles.sidebar}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: 'red',
                color: 'pink',
              },
            }, 
          }}
        >
          <MenuItem><NavLink to={"/dashboard"}>Dashboard </NavLink> </MenuItem>
          <MenuItem> <NavLink to={"/manageemployee"}> Manage Employee </NavLink></MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      </Sidebar>
    </div>
     
      </div>
    </>   
  );
}

export default Header;
