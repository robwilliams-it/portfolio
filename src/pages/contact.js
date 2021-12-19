import { Grid, Typography, Button } from '@mui/material';

const Contact = () => {
    return (
        <div
            id="contactMe"
            class="page"
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{height: "100%"}}
            >
                <Grid item>
                    <Typography variant="h6"
                        sx={{
                            textAlign:"center",
                            width: "800px"
                        }}

                    >
                        Hey!
                        <br/>
                        Thank you for taking the time to checkout my site.
                        <br/>
                        I am currently looking for a Front-End or Full-Stack positions
                        either remote or in TX (preferably around Austin, but open to other areas)
                        <br/>
                        Currently open to full time, part time, contract, or temp work.
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