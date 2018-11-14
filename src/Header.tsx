import React from "react";
import logo from "./logo.gif";
import "./Header.css";

const Header = () => {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div className={"name"}>
            Decentralized Commons
        </div>
        <div className={"pitch"}>
            <p>
                Decentralized Commons is an experimental strategy developed to meaningfully increase value flows
                to authors of works published under copyleft licenses while protecting public interest.
            </p>
        </div>
        <div className={"author"}>
            by <a href="https://twitter.com/ontofractal">ontofractal</a>
        </div>
    </header>;
};

export default Header;