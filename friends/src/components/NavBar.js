import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <StyledNavBar>

        </StyledNavBar>
    );
}

const StyledNavBar = styled.nav`
  height: 10vh;
  background-color: #313131;
  display: flex;
  justify-content: space-evenly;
  align-items: center

  a {
    color: #eaeaea;
    text-decoration: none;
    font-size: 18px;
  }
`


export default NavBar;