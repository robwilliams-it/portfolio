import { Grid, Typography, Button, Paper } from '@mui/material';

const ProjectDetails = () => {
    return (
        <div id="projectDetails">
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

export default ProjectDetails;