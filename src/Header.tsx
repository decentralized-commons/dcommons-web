import React from "react";
import logo from "./logo.gif";
import styled from "styled-components/macro";
import "./Header.css";

const HeaderStyled = styled.header`
  margin-bottom: 50px;
  margin-top: 25px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 200px;
    height: 200px;
  }

  .name {
    width: 80%;
    text-align: center;
  }

  .pitch {
    width: 70%;
  }

  .name {
    margin-top: 20px;
    font-size: 40px;
    margin-bottom: 20px;
    font-family: "Exo", sans-serif;
    font-weight: bold;
  }

  .author {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} className="logo" alt="logo" />
      <div className={"name"}>Decentralized Commons</div>
      <div className={"pitch"}>
        <p>
          Decentralized Commons is an experimental non-profit initiative developed to meaningfully increase value flows
          to authors of works published under copyleft licenses while protecting public interest.
        </p>
      </div>
      <div className={"author"}>
        by <a href="https://twitter.com/ontofractal">ontofractal</a>
      </div>
    </HeaderStyled>
  );
};

export default Header;
