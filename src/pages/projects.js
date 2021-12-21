import { ProjectDetails } from '../components';
import { Pokedex, Woof } from "../javascript/projects/index.js";

const myProjects = [
    Pokedex,
    Woof,
]

const Projects = () => {

    return (
        <div 
            id="projects"
            class="page"
        >
            
            <div id="content" style={{padding:"5px 0"}}>

                {myProjects.map((proj, key) => {
                    return (
                        <ProjectDetails project={proj} key={key} />
                    )
                })}

            </div>

        </div>
    )
}

export default Projects;