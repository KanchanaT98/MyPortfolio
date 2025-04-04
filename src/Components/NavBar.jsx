import React, { useRef, useState } from "react";
import './NavBar.css';
import underline from "../assets/underline.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_icon.svg";
import menu_close from "../assets/close_icon.svg";

const NavBar = () => {

    const [menu, setMenu] = useState("home");
    const [menuIcon, setMenuIcon] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        if(menuIcon){
            setMenuIcon(false);
            menuRef.current.style.right = "0px";
        }else{
            setMenuIcon(true);
            menuRef.current.style.right = "-350px"
        }
    }

    return(
        <div className="navbar">
            <h1 className="Head-Title">KANCHANA</h1>
            <img src={menu_open} alt="" style={{width:30}} className="nav-mob-open" onClick={openMenu}/> 
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" style={{width:30}} className="nav-mob-close" onClick={openMenu}/>
                <li><AnchorLink className="anchor-link" href="#profile"><p onClick={() => setMenu("home")}>Home</p>{menu ==="home"?<img id="nav-menu-id" src={underline} alt=""/>:<></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#aboutme"><p onClick={() => setMenu("aboutMe")}>About Me</p>{menu ==="aboutMe"?<img id="nav-menu-id" src={underline} alt=""/>:<></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#services"><p onClick={() => setMenu("services")}>Services</p>{menu ==="services"?<img id="nav-menu-id" src={underline} alt=""/>:<></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#myProjects"><p onClick={() => setMenu("projects")}>Projects</p>{menu ==="projects"?<img id="nav-menu-id" src={underline} alt=""/>:<></>}</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contactMe"><p onClick={() => setMenu("contact")}>Contact</p>{menu ==="contact"?<img id="nav-menu-id" src={underline} alt=""/>:<></>}</AnchorLink></li>
            </ul>
            <AnchorLink className="anchor-link" offset={50} href="#contactMe"><div className="nav-connect">Connect With Me</div></AnchorLink>
        </div>
    )
}
export default NavBar;