import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';
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
        
        <Link to="/">
            <div
                style={{
                    position: "absolute",
                    backgroundColor:"red",
                    height:"60px",
                    width:"60px",
                    float:"left",
                    alignSelf:"center"
                }}
            >
                Replace
                With
                Image 
            </div>
        </Link>

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
                <Link to="/about">
                    Get To Know Me
                </Link>
            </Grid>
            

            <Grid item>
                <Link to="/projects">
                    Projects
                </Link>
            </Grid>

            <Grid item>
                <Link to="/experiance">
                    Experiance
                </Link>
            </Grid>

            <Grid item>
                <Link to="/contact">
                    Contract
                </Link>
            </Grid>
            
        </Grid>

      </header>
    )
}

export default HeaderButtons;