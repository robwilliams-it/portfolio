import { JobDetails } from "../components";

const Experiance = (props) => {
    const { jobs } = props || "";
    
    renderJobs = () => {
        if(typeof jobs !== "string") {
            return (
                jobs.map((job, key)=>{
                    return(
                        <JobDetails id={key} job={job.details} company={job.company}/>
                    )
                })
            )
        } else {
            return <div/>
        }
    }

    return (
        <div id="experiance"
            style={{
                height: "100vh", 
                top: -40,
                zIndex: "-1",
                display: "grid",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {renderJobs()}
        </div>
    )

}

export default Experiance;