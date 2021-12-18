import { Button, IconButton, Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResumeButton from './resumeDownload';

const Footer =(props) => {
    const { linkedIn } = props;
    const { gitHub } = props;

    const linkToLinkedIn=()=> {
        window.open(linkedIn);
    }

    const linkToGitHub=()=> {
        window.open(gitHub);
    }

    return (
        <Box 
            id="footer"
        >
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
                        onClick={ linkToLinkedIn }
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
                        onClick={ linkToGitHub }
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