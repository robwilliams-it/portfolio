import { Grid, Typography, Button, Paper } from '@mui/material';



const ProjectDetails = (props) => {
    const { title, text, gif } = props;

    return (
        <Paper id="projectDetails" elevation={3}>
            <div id="summary">
                <Typography variant="h6" id="title"> 
                    {title} 
                </Typography>

                <Typography  id="text">
                    {text} 
                </Typography>
            </div>
            <div id="gif">
                <img src={gif}/>
            </div>
        </Paper>
    )
}

export default ProjectDetails;