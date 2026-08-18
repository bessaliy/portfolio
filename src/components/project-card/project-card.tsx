import type {Project} from "../../data/project_type.ts";
import type {ReactElement} from "react";
import sedonaImage from "../../img/projects/sedona/sedona-main-img.png";
import {projectDifficultyName, projectCategoryName} from "../../const.ts";
import {Link} from "react-router-dom";

type ProjectCardProps = {
    project: Project;
    index: number;
};

function ProjectCard({project, index}: ProjectCardProps): ReactElement {
    return (
        <li className="project-item">
            <div className="project-picture">
                <span className="project-number">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <img
                    src={sedonaImage}
                    alt={`${project.title} main picture`}
                    className="project-image"
                />
            </div>
            <section className="project-card card card-light">
                <ul className="project-additional-info">
                    <li className={`text project-additional-item project-badge-icon project-level project-level-${project.difficulty}`}>
                        {projectDifficultyName[project.difficulty]}
                    </li>
                    <li className={`text project-additional-item project-badge-icon project-type project-type-${project.category}`}>
                        {projectCategoryName[project.category]}
                    </li>
                </ul>
                <h2 className="content-header project-header">
                    {project.title}
                </h2>
                <p className="text project-description">
                    {project.shortDescription}
                </p>
                <ul className="project-stack-list">
                    {project.stack.map((stackItem) => (
                        <li className="text project-stack-item" key={stackItem}>
                            {stackItem}
                        </li>
                    ))}
                </ul>
                <Link to={`/project/${project.id}`} className="project-button">View project &rarr;</Link>
            </section>
        </li>
    );
}

export default ProjectCard;
