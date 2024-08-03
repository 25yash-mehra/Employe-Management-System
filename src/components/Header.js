import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    
    
<Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: 'red',
          color: 'pink',
        },
      },
    }}
  >
    <MenuItem> Dashboard</MenuItem>
    <MenuItem> Manage Employee</MenuItem>
    <MenuItem>log out</MenuItem>
  </Menu> 
</Sidebar>

</>
  )
}

export default Header