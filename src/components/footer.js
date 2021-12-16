import { Button, Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResumeButton from './resumeDownload';

const Footer =(props) => {
    const { linkedIn } = props;
    const { gitHub } = props;
    
    const handleClick = (event) => {
        // read the input
        // redirect based on which was provided
        const elementID = event.target.id;
        console.log(elementID);
        switch(elementID) {
            case "linkedIn":
                window.open(linkedIn);
                break;
            case "gitHub":
                window.open(gitHub);
                break;
            default:
                break;
        }
    }

    return (
        <Box 
            id="footer"
            sx={{
                position: "absolute",
                bottom: "242px",
            }}
        >
            <img 
                src="sidebar.png"
                style={{
                    position:"absolute",
                    height:"350px",
                }}
            />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <ResumeButton alt={true}/>
                </Grid>

                <Button
                    id="linkedIn"
                    onClick={ handleClick }
                    sx={{
                        color: "black"
                    }}
                >
                    <LinkedInIcon id="linkedIn"/>
                </Button>


                <Button
                    id="gitHub"
                    onClick={ handleClick }
                    sx={{
                        color: "black"
                    }}
                >
                    <GitHubIcon id="gitHub"/>
                </Button>

            </Grid>
        </Box>
    )
}

export default Footer;