import { Typography, Paper} from '@mui/material';

const Landing = () => {
    const titles=[
        "Full Stack Software engineer",
        "Gamer"
    ];

    const renderTitles = () => {
        return (
            titles.map((title, key)=>{
                return (
                    <Paper 
                        id="work-title"
                        sx={{px:2, margin: "10px auto", width:`${title.length * 30}px`}}
                    >
                        <Typography 
                            variant="h3"
                            key={key}
                        >
                            {title}
                        </Typography>
                    </Paper>
                )
            })
        )
    }

    return (
        <div 
            id="home"
            class="page"
            style={{
                position: "relative",
                top: -40,
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center",
            }}
        >
          <div id="content">
            <Typography variant="h4">
              Nice to meet ya! I'm
            </Typography>
            <Typography variant="h2">
              Rob
            </Typography>

            {renderTitles()}
            
          </div>

        </div>
    )
}

export default Landing;