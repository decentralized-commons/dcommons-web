import React from "react";
import styled from "styled-components/macro";
import logo from "./logo.gif";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <HeaderStyled>
      <div className={"App-nav-logobox"}>
        <Link to={"/"}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className={"name"}>Decentralized Commons</div>
      </div>
      <div className={"author"}>
        by <a href="https://twitter.com/ontofractal">ontofractal</a>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  .App-nav {
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .App-nav .App-logo {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }

  .App-nav-logobox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
`;

export default Nav;
