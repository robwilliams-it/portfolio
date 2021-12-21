import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { useEffect, useState } from "react";
import Drawer from "./drawer.js";
import Banner from "./banner.js";

const smallScreenSize = 900;

const HeaderButtons = () => {
    const [isSmallScreen, setSmallScreen] = useState( window.innerWidth <= smallScreenSize )

    const renderButtons = () => {
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
                    <Box
                        sx={{
                            height:"36.5px",
                            width:"36.5px",
                            display:"grid",
                            alignContent:"center",
                            justifyContent:"center",
                        }}
                    >
                        <img src="logo.png" style={{height: "100%", width: "100%"}}/>
                    </Box>
                </Link>
            </div>

            {renderButtons()}

      </header>
    )
}

export default HeaderButtons;