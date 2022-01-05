import { useEffect, useState } from 'react';
import { Typography, Box} from '@mui/material';

const titles=[
    "Front End",
    "Full Stack",
    "Mobile",
    "Game Development",
    "Robots",
    "Anime"
];

const TitleCard = () => {
    const [targets, setTargets] = useState({
        previous: titles.length - 1,
        active: 0,
        next: 1,
        holding: [0,1],
    });

    const updateTargets =()=>{
        const newTarget = {...targets};
        newTarget.previous = newTarget.active;
        newTarget.active = newTarget.next;

        let n = newTarget.next + 1;
        n = n >= titles.length ? 0 : n;
        newTarget.next = n;
        
        newTarget.holding = Object.values(newTarget);
        newTarget.holding.pop();

        setTargets(newTarget);
    }

    useEffect(()=>{
        setTimeout(() => {
            updateTargets();
        }, 2000);
    }, [targets]);
    
    const getTopPos = (orderIndex) => {
        if (orderIndex === targets.previous){
            return -80;
        } else if (orderIndex === targets.next) {
            return 80;
        } else {
            return 0;
        }
    }

    const getOpacity = (orderIndex) => {
        
        if (orderIndex === targets.active){
            return 1;
        } else {
            return 0;
        }
    }

    return (
        <Box
            id="work-title"
            sx={{
                // backgroundColor: "inset.main",
                borderRadius: "10px",
                boxShadow: "2px 2px 5px",
                height: "40px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div>
                {titles.map((title, key)=>{
                    return (
                        <div 
                            id="titles"
                            style={{
                                top: `${getTopPos(key)}px`,
                                // left: `${getLeftPos(key)}px`,
                                opacity: getOpacity(key),
                                textAlign: "center",
                                paddingTop: "4px",
                                position: "absolute",
                                width: "100%",
                            }}
                        >
                            <Typography 
                                variant="h5"
                                key={key}
                            >
                                {title}
                            </Typography>
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}

export default TitleCard;