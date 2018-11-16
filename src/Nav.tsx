import React from "react";
import "./Nav.css";
import logo from "./logo.gif";
import {Link} from "react-router-dom";


const Nav = () => {
    return <header className="App-nav">
        <div className={"App-nav-logobox"}>
            <Link to={"/"}>
                <img src={logo} className="App-logo" alt="logo"/>
            </Link>
            <div className={"name"}>
                Decentralized Commons
            </div>
        </div>
        <div className={"author"}>
            by <a href="https://twitter.com/ontofractal">ontofractal</a>
        </div>
    </header>;
};

export default Nav;
