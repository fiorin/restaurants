import React from "react";
import { FaBolt, FaHotdog, FaStar, FaStickyNote, FaUserPlus } from 'react-icons/fa';
import Link from "next/link";
import theme from "../../config/theme";
import styled from "styled-components";
import Image from 'next/image';

const { colors } = theme;

const FilterMenu = () => (
  <div>
  <MenuOptionsActionsLiUl>
    <MenuOptionsActionsLi>
      <Link href="/?price=12">
        <MenuIconButton>
          <FaHotdog/>
          <ButtonDescription>
            <p><b>No money?</b></p>
            <p><small>Cheaper ones</small></p>
          </ButtonDescription>
        </MenuIconButton>
      </Link>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi>
      <Link href="/?rating=5">
        <MenuIconButton>
          <FaStar/>
          <ButtonDescription>
            <p><b>Five stars</b></p>
            <p><small>You deserve!</small></p>
          </ButtonDescription>
        </MenuIconButton>
      </Link>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi>
      <Link href="/?distance=3">
        <MenuIconButton>
          <FaStickyNote/>
          <ButtonDescription>
            <p><b>On the corner</b></p>
            <p><small>The closest</small></p>
          </ButtonDescription>
        </MenuIconButton>
      </Link>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi>
      <Link href="/?name=American">
        <MenuIconButton>
          <FaBolt/>
          <ButtonDescription>
            <p><b>Fast food</b></p>
            <p><small>The fastest</small></p>
          </ButtonDescription>
        </MenuIconButton>
      </Link>
    </MenuOptionsActionsLi>
  </MenuOptionsActionsLiUl>
  <a href="http://fior.in" target="_blank">

    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
    <Image src={"/img/fiorin.png"} alt="Fiorin" width="78" height="25"/>
    </div> 
  </a>
  </div>
)

export default FilterMenu 

const ButtonDescription = styled.div `
  margin-left:10px;
  width:100%;
`

const MenuOptionsActionsLiUl = styled.ul`
  list-style: none;
  padding-left:0;
  margin-bottom:20px;
  @media(max-width: 800px) {
    margin-top: 0;
  }
`;

const MenuOptionsActionsLi = styled.li`
  font-size: 1.3em;
  color: ${ colors.text };
  text-align: center;
    opacity: .9;
  &.disabled {
    opacity: .5;
  }
  &:not(last-child) {
    margin-bottom:.8em;
  }
`;

const MenuIconButton = styled.span`
  font-size: 1em;
  border:1px solid #ddd;
  color: #333;
  text-align: center;
  opacity: .9;
  padding:10px 15px;
  display: inline-flex;
  max-width:100%;
  width:150px;
  border-radius: 5px;
  background: #f5f5f5;
  cursor: pointer;
  svg {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2em;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: .5em;
  }
  :hover{
    background: #eee;
    border:1px solid #ccc;
  }
`;