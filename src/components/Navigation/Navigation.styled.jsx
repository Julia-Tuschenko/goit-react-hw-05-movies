import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
flex-direction: row; 
margin: 20px;
`
export const Link = styled(NavLink)`

font-size: 24px;
font-weight: 700;
list-style: none;
color: black;
&.active {
    color: #b70af5 ;
  }
  :not(:last-child) {
      margin-right: 50px;
  }
`
