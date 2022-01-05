import { ProjectDetails } from '../components';
import { Pokedex, Woof } from "../javascript/projects/index.js";
import { Typography, Grid } from "@mui/material";

const myProjects = [
    Pokedex,
    Woof,
]

const Projects = () => {

    return (
        <div 
            id="projects"
        >
            <div
                id="pageHeading"
            >

                <Typography variant="h4">
                    Projects
                </Typography>
                <br/>

            </div>

            <div id="content" style={{padding:"5px 0"}}>

                {myProjects.map((proj, key) => {
                    return (
                        <ProjectDetails project={proj} key={key} />
                    )
                })}

            </div>

        </div>
    )
}

export default Projects;