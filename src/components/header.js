import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Movr from '../assets/movr-logo.png';

const HeaderCon = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;
  font-family: 'Rokkitt', serif;
  letter-spacing: 0.12em;
  font-size: 1.1em;
`;

const BrandLogo = styled.div`
  width: 100px;

  img {
    width: 100%;
    height: auto;
  }
`;

const Nav = styled.nav`
  font-size: 1.25em;

  a {
    padding-left: 1em;
    text-decoration: none;
    color: #08E152;

    &:hover {
      color: #FAFF13;
    }
  }
`;

const Header = () => {
  return (
    <HeaderCon>
      <BrandLogo>
        <Link to="/">
          <img src={Movr} alt="movr logo" />
        </Link>
      </BrandLogo>

      <Nav>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    </HeaderCon>
  );
};

export default Header;
