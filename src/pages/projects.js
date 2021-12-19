import { Grid, Typography, Button, Paper } from '@mui/material';

const Projects = () => {
    return (
        <div 
            id="projects"
            class="page"
        >

            <div id="summary">
                <Paper sx={{width: "300px", height: "325px"}}>
                    <Typography>
                        Pokedex
                    </Typography>
                </Paper>
            </div>
            <div id="gif">
                <img src="pokedex.gif"/>
            </div>
        </div>
    )
}

export default Projects;