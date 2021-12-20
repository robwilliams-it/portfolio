import { Link } from "react-router-dom";
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import Drawer from "./drawer.js";
import Banner from "./banner.js";

const smallScreenSize = 900;

const HeaderButtons = () => {
    const [isSmallScreen, setSmallScreen] = useState( window.innerWidth <= smallScreenSize )

    const renderButtons = () => {
        console.log(isSmallScreen);
        if (isSmallScreen) {
            return <Drawer/>
        } else {
            return <Banner/>
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
    }, [])

    const handleResize = () => {
        setSmallScreen(window.innerWidth <= smallScreenSize);
    }

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
                    <Paper
                        elevation={0}
                        sx={{
                            height:"36.5px",
                            width:"36.5px",
                            backgroundColor:"#00E0FF",
                            display:"grid",
                            alignContent:"center",
                            justifyContent:"center",
                            color:"white",
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
                    </Paper>
                </Link>
            </div>

            {renderButtons()}

      </header>
    )
}

export default HeaderButtons;