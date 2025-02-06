import "./Intro.css";
import React from 'react';
import web1 from '../assets/web1.png'

const Intro = () => {
    return(
        <div className="profile">
            <img src={web1} alt=""/>
            <h1><span>I'm Kanchana Thennakoon,</span>&nbsp;Software Engineer from Kandy, Sri Lanka</h1>
            <p>With a Computer Science Degree from the University of Peradeniya, I have done multiple projects using Springboot and ReactJS. I'm Currently working as an Software Engineering Intern.</p>
            <div className="buttons">
                <div className="profile-connect">Connect With Me</div>
                <hr></hr>
                <div className="profile-resume">My Resume</div>
            </div>
        </div>
        
    )
}
export default Intro;