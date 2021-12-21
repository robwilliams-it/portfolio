import { Typography, Box} from '@mui/material';

const Landing = () => {
    const titles=[
        "Front End",
        "Full Stack",
        "Mobile",
    ];

    const renderTitles = () => {
        return (
            titles.map((title, key)=>{
                return (
                    <Box
                        sx={{
                            backgroundColor: "inset.main",
                            border: 1
                        }}
                        id="work-title"
                    >
                        <Typography 
                            variant="h3"
                            key={key}
                        >
                            {title}
                        </Typography>
                    </Box>
                )
            })
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