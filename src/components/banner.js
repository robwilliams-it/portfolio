import { Link } from "react-router-dom";
import { Button, Grid, Paper, Typography } from '@mui/material';
import ResumeButton from './resumeDownload.js';

const Banner = () => {
    return (
        <nav id="banner"> 
            <div>
                <ResumeButton />
            </div>

            <div>
                <a href="#projects">
                    <Typography> 
                        Projects
                    </Typography>   
                </a>
            </div>

            <div>
                <a href="#experience">
                    <Typography> 
                        Experience
                    </Typography> 
                </a>
            </div>

            <div>
                <a href="#contactMe">
                    <Typography> 
                        Contact
                    </Typography> 
                </a>
            </div>
            
        </nav>
    )
}

export default Banner;