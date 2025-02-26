import React from 'react';
import './About.css';
import Web2 from '../assets/Web2.jpeg';

const About = () => {
    return(
        <div id="aboutme">
            <div className="title">
                <h1>About Me</h1>
            </div>
            <div className="info">
                <div className="left">
                    <img src={Web2} alt=""/>
                </div>
                <div className="right">
                    <div className="para">
                        <p>A hardworking, responsible, and dedicated student in the fields of Computer Science and Statistics. A reliable and
                            supportive team member who’s self-motivated to solve problems and complete any task with absolute commitment.
                            Seeking Opportunities in Software Engineering to contribute to the industry and improve myself to be the best.
                        </p>
                        <p>Currently working as an Software Developer Intern at <span>NovusTech Transact Lanka (Pvt) Ltd, Bambalapitiya, Sri Lanka</span></p>
                    </div>
                    <div className="skills">
                        <div className='skill'><p>React JS</p><hr style={{width: "70%"}}/></div>
                        <div className='skill'><p>Spring Boot</p><hr style={{width: "60%"}}/></div>
                        <div className='skill'><p>MySQL</p><hr style={{width: "50%"}}/></div>
                        <div className='skill'><p>Agile</p><hr style={{width: "70%"}}/></div>
                    </div>
                </div>
            </div>
    </div>
    )

}
export default About;