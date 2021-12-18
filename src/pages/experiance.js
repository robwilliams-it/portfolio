import { JobDetails } from "../components";
import { Moda, Fendi, Chase } from "../javascript/work_history/index.js";

const Experiance = () => {
    return (
        <div id="experiance"
            style={{
                height: "100vh", 
                top: -40,
                zIndex: "-1",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                // width: "100%"
            }}
        >
            <div id="job-experiance"
                style={{paddingBottom: "100px"}}
            >
                <JobDetails job={Moda} company={"Moda"}/>
                <br/>
                <JobDetails job={Fendi} company={"Fendi"}/>
                <br/>
                <JobDetails job={Chase} company={"Chase"}/>
            </div>

        </div>
    )

}

export default Experiance;