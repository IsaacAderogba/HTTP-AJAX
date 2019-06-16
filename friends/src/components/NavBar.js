import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink activeClassName="nav-active" exact to="/">
        Friends List
      </NavLink>
      <NavLink activeClassName="nav-active" to="/friends_builder">
        Friends Builder
      </NavLink>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  height: 10vh;
  background-color: #313131;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .nav-active {
      font-weight: bold;
      color: white;
      font-size: 20px;
  }

  a {
    color: #eaeaea;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default NavBar;
