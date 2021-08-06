import React from "react";
import { FaUtensils, FaTasks } from 'react-icons/fa';
import Link from "next/link";
import theme from "../../config/theme";
import styled from "styled-components";

const { colors } = theme;

const MenuIconsList = () => (
  <MenuIconsUl>
    <MenuIconLi>
      <Link href="/">
        <FaUtensils/>
      </Link>
    </MenuIconLi>
    <MenuIconLi className="disabled">
      <FaTasks/>
    </MenuIconLi>
  </MenuIconsUl>
)

export default MenuIconsList 

const MenuIconsUl = styled.ul`
  list-style: none;
  padding-left:0;
  @media(max-width: 800px) {
    margin: 16px 0 12px 0;
  }
`;

const MenuIconLi = styled.li`
  font-size: 1.3em;
  color: ${ colors.textinverse };
  text-align: center;
  opacity: .8;
  margin-bottom:10px;
  &.disabled {
    opacity: .4;
  }
  &:hover:not(.disabled) {
    opacity: 1;
  }
  &:not(.disabled){
    cursor: pointer;
  }
  @media(max-width: 800px) {
    display:inline-block;
    margin: 0 10px;
  }
`;