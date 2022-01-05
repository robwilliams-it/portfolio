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
                }}
            >
                <Grid item>
                    <ResumeButton alt={true}/>
                </Grid>

                <Grid item>
                    <Button
                        className="foot-button"
                        variant="contained"
                        id="linkedIn"
                        onClick={ linkToLinkedIn }
                        sx={{
                            height:"40px",
                            width:"32px",
                            color: "black"
                        }}
                    >
                        <LinkedInIcon id="linkedIn" fontSize="large"/>
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        variant="contained"
                        id="gitHub"
                        onClick={ linkToGitHub }
                        sx={{
                            height:"40px",
                            width:"32px",
                            color: "black",
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