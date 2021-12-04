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
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <ResumeButton />
                </Grid>

                <Button
                    id="linkedIn"
                    onClick={ handleClick }
                >
                    <LinkedInIcon id="linkedIn"/>
                </Button>


                <Button
                    id="gitHub"
                    onClick={ handleClick }
                >
                    <GitHubIcon id="gitHub"/>
                </Button>

            </Grid>
        </Box>
    )
}

export default Footer;