import { Projects } from '../../data/project_data.ts';
import ProjectCard from '../../components/project-card/project-card.tsx';

function ProjectsPage() {
    return (
        <main className="main-container">
            <section className="projects-hero">
                <div className="projects-hero-text">
                    <span className="projects-hero-accent">//Work</span>
                    <h1 className="projects-hero-header">My projects</h1>
                </div>

                <section className="projects-sorting">
                    <p className="projects-sorting-text">
                        A selection of things I've built with code, curiosity and a little bit of magic.
                    </p>
                    <ul className="sorting-list">
                        <li className="sorting-item"><button className="sorting-button sorting-button-active" type="button">All</button></li>
                        <li className="sorting-item"><button className="sorting-button" type="button">Websites</button></li>
                        <li className="sorting-item"><button className="sorting-button" type="button">Web apps</button></li>
                        <li className="sorting-item"><button className="sorting-button" type="button">SPA</button></li>
                        <li className="sorting-item"><button className="sorting-button" type="button">Experiments</button></li>
                    </ul>
                </section>
            </section>

            <section className="projects-page-content">
                <ul className="project-list">
                    {Projects.map((project, index) => (
                        <ProjectCard project={project} index={index} key={project.id} />
                    ))}
                </ul>
            </section>

            <a href="#" className="button-regular projects-more-button">Show more &rarr;</a>
        </main>
    );
}

export default ProjectsPage;
