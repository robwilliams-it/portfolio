import { Link } from "react-router-dom";
import { Button, Grid, Card, Typography } from '@mui/material';
import ResumeButton from './resumeDownload.js';

const HeaderButtons = () => {
    return (
        
        <header 
            id="header"
            className="App-header"
        >
        
            <div
                style={{
                    display: "grid",
                    position: "absolute",
                    alignItems:"center",
                    height: "50px",
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
                        <Typography 
                            sx={{
                                fontWeight: "bold", 
                                color: "black",
                            }}
                        >
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
                sx={{height:"50px"}}
            > 

                <Grid item>
                    <ResumeButton />
                </Grid>

                <Grid item>
                    <Link to="/projects">
                        <Typography> 
                            Projects
                        </Typography>   
                    </Link>
                </Grid>

                <Grid item>
                    <Link to="/experiance">
                        <Typography> 
                            Experiance
                        </Typography> 
                    </Link>
                </Grid>

                <Grid item>
                    <Link to="/contact">
                        <Typography> 
                            Contact
                        </Typography> 
                    </Link>
                </Grid>
                
            </Grid>

      </header>
    )
}

export default HeaderButtons;