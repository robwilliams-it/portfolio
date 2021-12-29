import { JobDetails } from "../components";
import { Moda, Fendi, Chase, Engineer } from "../javascript/work_history/index.js";

const Experience = () => {
    return (
        <div 
            id="experience"
            class="page"
        >
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
    )

}

export default Experience;