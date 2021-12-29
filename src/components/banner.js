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
                <Link to="/projects">
                    <Typography> 
                        Projects
                    </Typography>   
                </Link>
            </div>

            <div>
                <Link to="/experience">
                    <Typography> 
                        Experience
                    </Typography> 
                </Link>
            </div>

            <div>
                <Link to="/contact">
                    <Typography> 
                        Contact
                    </Typography> 
                </Link>
            </div>
            
        </nav>
    )
}

export default Banner;