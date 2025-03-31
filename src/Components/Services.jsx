import React from "react";
import './Services.css';
import react from '../assets/react.gif'
 import web4 from '../assets/web4.svg'
 import web5 from '../assets/web5.gif'
 import Web6 from '../assets/aws.svg'
 import postman from '../assets/postman.svg'
 import github from '../assets/github.gif'


const Services = () => {
    return(
        <div id="services">
            <h1>My Services</h1>
            <div className="services-sections">
                <div className="services-left">
                    <div className="frontend">
                        <img src={react} alt=""/>
                        <h2 style={{fontWeight:600}}>FrontEnd</h2>
                    </div>
                    <div className="backend">
                        <img src={web4} alt=""/>
                        <h2 style={{fontWeight:600}}>BackEnd</h2>
                    </div>
                </div>
                <div className="services-middle">
                    <div className="postman">
                        <img src={postman} alt=""/>
                        <h2 style={{fontWeight:600}}>Testing</h2>
                    </div>
                    <div className="VCS">
                        <img src={github} alt=""/>
                        <h2 style={{fontWeight:600}}>VCS</h2>
                    </div>
                </div>
                <div className="services-right">
                    <div className="database">
                        <img src={web5} alt=""/>
                        <h2 style={{fontWeight:600}}>Database</h2>
                    </div>
                    <div className="cloud">
                        <img src={Web6} alt=""/>
                        <h2 style={{fontWeight:600}}>Cloud</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;