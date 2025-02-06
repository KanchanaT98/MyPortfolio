import React from "react";
import './NavBar.css';

const NavBar = () => {

    return(
        <div className="navbar">
            <h1 className="Head-Title">KANCHANA</h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}
export default NavBar;