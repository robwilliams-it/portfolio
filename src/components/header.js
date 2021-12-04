import { Button, Grid, Link } from '@mui/material';
import ResumeButton from './resumeDownload.js';

const HeaderButtons = () => {
    return (
        
        <header 
        id="header"
        className="App-header" 
        stlye={{
          position: "relative",
          top: 0,
          // height: "200px",
          // display: "grid",
          // justifyContent: "center",
        }}
      >
        <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
            columnSpacing={2}
        > 
            <Grid item>
                <ResumeButton />
            </Grid>

            <Grid item>
                <Link href="#about">
                    Get To Know Me
                </Link>
            </Grid>

            <Grid item>
                <Link href="#projects">
                    Projects
                </Link>
            </Grid>

            <Grid item>
                <Link href="#experiance">
                    Experiance
                </Link>
            </Grid>

            <Grid item>
                <Link href="#contact">
                    Contract
                </Link>
            </Grid>
            
        </Grid>

      </header>
    )
}

export default HeaderButtons;