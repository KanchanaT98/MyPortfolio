import "./Intro.css";
import React from 'react';
import web1 from '../assets/web1.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Intro = () => {

    const download = () => {
        const pdfUrl = "/Kanchana_CV.pdf"; // file path
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Kanchana_CV.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div id="profile">
            <img src={web1} alt=""/>
            <h1><span>I'm Kanchana Thennakoon,</span>&nbsp; Software Engineer Intern from Kandy, Sri Lanka</h1>
            <p>With a Computer Science Degree from the University of Peradeniya, I have done multiple projects using Springboot and ReactJS. I'm Currently working as an Software Engineering Intern.</p>
            <div className="buttons">
                
                <AnchorLink className="anchor-link" offset={50} href="#contactMe"><div id="profile-connect">Connect With Me</div></AnchorLink>
                <hr></hr>
                <div onClick={download} className="profile-resume">My Resume</div>
            </div>
        </div>
        
    )
}
export default Intro;