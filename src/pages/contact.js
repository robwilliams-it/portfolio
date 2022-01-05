import { Grid, Typography, Button } from '@mui/material';

const Contact = () => {
    return (
        <div
            id="contactMe"
            class="page"
        >
            <Grid
                id="content"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: "100%", 
                    width: "100%"
                }}
            >
                <Grid item sx={{width: "100%"}}>
                    <Typography variant="h6">
                        Hey!
                        <br/>
                        Thank you for taking the time to checkout my site.
                        <br/>
                        My inbox is always open if you would like to chat. 
                        <br/>
                        
                    </Typography>
                </Grid>

                <br/>

                <Button 
                    id="email"
                    variant="contained"
                    href="mailto:robwilliams.it@gmail.com"
                    sx={{
                        backgroundColor:"#00E0FF",
                        color:"black",
                    }}
                >
                    <Typography 
                        variant="h5"
                        sx={{fontWeight:"bold"}}
                    >
                        Say Hi!
                    </Typography>
                </Button>
            </Grid>
        </div>
    )
}

export default Contact;