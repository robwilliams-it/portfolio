import { Grid, Typography, Button, Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';



const ProjectDetails = (props) => {
    const { title, text, gif, link } = props.project;

    const handleClick=()=> {
        window.open(link);
    }

    return (
        <Paper 
            id="projectDetails" 
            elevation={3}
        >
            <div id="summary" style={{position:"relative"}}>
                <Button
                    onClick={handleClick}
                    sx={{
                        position: "absolute",
                    }}
                >
                    <LaunchIcon />
                </Button>
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