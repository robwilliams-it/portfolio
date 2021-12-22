import { Grid, Typography, Button, Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';



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
                        right: "0px",
                        top: "0px"
                    }}
                >
                    <GitHubIcon sx={{color: "black"}} />
                </Button>

                {/* <Button
                    onClick={TODO: send to live link}
                    sx={{
                        position: "absolute",
                        right: "64px",
                        top: "0px"
                    }}
                >
                    <LaunchIcon sx={{color: "black"}} />
                </Button> */}


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