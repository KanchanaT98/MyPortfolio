import React from "react"
import './Projects.css'
import project_array from '../assets/project_data.js'
import arrow from '../assets/right-arrow.png'

const Projects = () => {
    return(
        <div id="myProjects">
            <h1>My Projects</h1>
            <div className="myProjects-array">
                {project_array.map((project,index) => {
                    return <img key={index} src={project.p_img} alt=""/>
                })}
            </div>
            <div className="myProject-button">
                <p className="myProject-button-btnTitile">Visit GitHub</p>
                <img src={arrow} alt="" style={{width:"30px", height:"20px"}}/>
            </div>

        </div>
    )
}
export default Projects;