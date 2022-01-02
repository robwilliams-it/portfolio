import { Typography, Box} from '@mui/material';
import { TitleCard } from '../components/index.js';

const Landing = () => {

    return (
        <div 
            id="home"
            class="page"
        >
            <div id="content">
                <Typography variant="h5">
                Nice to meet ya! I'm
                </Typography>
                <Typography variant="h2">
                Rob Williams
                </Typography>
                <Typography variant="h5">
                & I'm interested in:
                </Typography>

                <TitleCard/>
                
            </div>

        </div>
    )
}

export default Landing;