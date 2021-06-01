import React from "react";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from "./navbarElements";
import { menuData } from "../../data/menuData";
import { Button } from "../Button";
import home from "../../images/home.svg";


const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
          <img src={home}  alt={home}/>
          <p>Dream Homes</p>
      </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks key={index} to={item.link}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/" primary="true"> Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
