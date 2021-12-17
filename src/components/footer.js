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
                bottom: "0px",
                height:"350px",
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
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    height: "100%",
                    ml: "10px",
                }}
            >
                <Grid item>
                    <ResumeButton alt={true}/>
                </Grid>

                <Grid item>
                    <Button
                        id="linkedIn"
                        onClick={ handleClick }
                        sx={{
                            height:"32px",
                            width:"32px",
                            color: "black"
                        }}
                    >
                        <LinkedInIcon id="linkedIn" fontSize="large"/>
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        id="gitHub"
                        onClick={ handleClick }
                        sx={{
                            height:"32px",
                            width:"32px",
                            color: "black"
                        }}
                    >
                        <GitHubIcon id="gitHub" fontSize="large"/>
                    </Button>
                </Grid>


            </Grid>
        </Box>
    )
}

export default Footer;