import { JobDetails } from "../components";
import { Moda, Fendi, Chase } from "../javascript/work_history/index.js";

const Experiance = () => {
    return (
        <div 
            id="experiance"
            class="page"
        >
            <div
                id="content"
            >
                <div id="job-experiance">
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

export default Experiance;