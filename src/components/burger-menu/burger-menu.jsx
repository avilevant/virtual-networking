import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './burger-menu.scss';



const BurgerMenu = ()=>{
    return (
        <Menu right >
          <a id="home" className="menu-item" href="/personalprofile">My Profile</a>
          <a id="about" className="menu-item" href="/signin">Sign In</a>
          <a id="contact" className="menu-item" href="/signup">Register</a>
          <a id="contact" className="menu-item" href="/profile">Edit Profile</a>
          <a id="contact" className="menu-item" href="/contact">Sign Out</a>
         
        </Menu>
      );

}

export default BurgerMenu;