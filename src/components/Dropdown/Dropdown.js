import React from "react";
import {
  DropdownContainer,
  Icon,
  CloseIcone,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap
} from "./dropdownElments";
import { menuData } from "../../data/menuData";
import { Button } from "../Button";

const Dropdown = ({isOpen,toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcone />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
  ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
