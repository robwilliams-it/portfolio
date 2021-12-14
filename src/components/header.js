import { Link } from "react-router-dom";
import { Button, Grid, Card, Typography } from '@mui/material';
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
        
        <div
            style={{
                display: "grid",
                position: "absolute",
                alignItems:"center",
                height: "36.5px",
                paddingLeft: "20px"
            }}
        >
            <Link to="/">
                <Card
                    sx={{
                        height:"36.5px",
                        width:"36.5px",
                        backgroundColor:"#00E0FF",
                        display:"grid",
                        alignContent:"center",
                        justifyContent:"center",
                        color:"white"
                    }}
                >
                    <Typography>
                        R
                    </Typography>
                </Card>
            </Link>
        </div>

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
                    Contact
                </Link>
            </Grid>
            
        </Grid>

      </header>
    )
}

export default HeaderButtons;