import { Typography, Divider } from "@mui/material";
import { JobDetails } from "../components";
import { Moda, Fendi, Chase, Engineer } from "../javascript/work_history/index.js";

const Experience = () => {
    return (
        <div 
            id="experience"
            class="epage"
        >
            <div
                id="pageHeading"
            >
                <Typography variant="h4">
                    Work Experiance
                </Typography>
                <br/>
            </div>
            
            <div id="content">
                <div id="job-experience">
                    <JobDetails job={Engineer} company={"Full Stack Engineering"}/>
                    <br/>
                    <JobDetails job={Moda} company={"Moda"}/>
                    <br/>
                    <JobDetails job={Fendi} company={"Fendi"}/>
                    <br/>
                    <JobDetails job={Chase} company={"Chase"}/>
                    <br/>
                </div>
            </div>


        </div>
    )

}

export default Experience;