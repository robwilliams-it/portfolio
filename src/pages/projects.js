import { ProjectDetails } from '../components';
import { Pokedex } from "../javascript/projects/index.js";

const myProjects = [
    Pokedex,
    Pokedex,
    Pokedex,
    Pokedex,

]

const Projects = () => {
    const renderProjects = () => (
        <div id="content" style={{padding:"5px 0"}}>
            {myProjects.map((proj, key) => {
                return (
                    <ProjectDetails project={proj} />
                )
            })}
        </div>
    )

    return (
        <div 
            id="projects"
            class="page"
        >
            {renderProjects()}
        </div>
    )
}

export default Projects;