import { ProjectDetails } from '../components';
import { Grid, Typography, Button, Paper } from '@mui/material';

const myProjects = [
    {
        title: "Pokedex" ,
        text: "Some Words by some one elsdksjfhkasjhdfkjshdfje this is a tesstlkasdfl;akshdf;lajksd;ljkfas;lkdfjlsakdjflakjs;df;" ,
        gif: "pokedex.gif" ,
    },
]

const Projects = () => {
    const renderProjects = () => {
        return (
            myProjects.map((proj, key) => {
                return (
                    <ProjectDetails 
                        title={proj.title} 
                        gif={proj.gif}
                        text={proj.text}
                    />
                )
            })
        )
    }

    return (
        <div 
            id="projects"
            class="page"
        >
            {renderProjects()}
        </div>
    )
}

export default Projects;