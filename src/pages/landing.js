import { Typography, Box} from '@mui/material';

const titles=[
    "Front End Engineering",
    "Full Stack Engineering",
    "Mobile Development",
];

const Landing = () => {

    const renderTitles = () => {
        return (
            <Box
                id="work-title"
                sx={{
                    backgroundColor: "inset.main",
                    border: 1,
                    borderRadius: "10px",
                }}
            >
                <ul>
                    {titles.map((title, key)=>{
                        return (
                            <li>
                                <Typography 
                                    variant="h5"
                                    key={key}
                                >
                                    {title}
                                </Typography>
                            </li>
                        )
                    })}
                </ul>
            </Box>
        )
    }

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

                {renderTitles()}
                
            </div>

        </div>
    )
}

export default Landing;