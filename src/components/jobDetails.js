import {Paper, Container} from '@mui/material/';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const JobDetails = (props) => {
    const { job } = props;
    const { company } = props;

    return (
        <Container id="work" elevation={0}>
            <Paper id="work_content"> 
                <Typography>{company} </Typography>
                {job.positions.map((job, index)=>{
                    return (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                            <Typography id="work_title"> {job.title} </Typography> 
                            {/* <Typography id="company_name"> {company} </Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                <ul>
                                    {job.details.map((detail, dIndex)=>{
                                        return (
                                            <li id="achievement" key={dIndex}>{detail}</li>
                                        )
                                    })}
                                </ul>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </Paper> 
        </Container>
    )
}

export default JobDetails;