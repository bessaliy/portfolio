import type {ReactElement} from "react";
import {Link, useParams} from "react-router-dom";

import {AppRoute, projectCategoryName} from "../../const.ts";
import {Projects} from "../../data/project_data.ts";
import sedonaImage from "../../img/projects/sedona/sedona-main-img.png";

const techStackClassName = {
    HTML: 'html',
    CSS: 'css',
    JavaScript: 'javascript',
    TypeScript: 'typescript',
    React: 'react',
    Redux: 'redux',
    Jest: 'jest',
    'Next.js': 'next',
    Figma: 'figma',
} as const;

function renderParagraphs(text: string): ReactElement[] {
    return text
        .split('\n')
        .filter((paragraph) => paragraph.trim().length > 0)
        .map((paragraph) => (
            <p className="text" key={paragraph}>
                {paragraph}
            </p>
        ));
}

function ProjectPage(): ReactElement {
    const {id} = useParams();
    const project = Projects.find((item) => item.id === id);

    if (!project) {
        return (
            <main className="main-container project-page">
                <h1 className="content-header">Project not found</h1>
                <Link to={AppRoute.ProjectsList} className="button-regular">
                    &larr; Back to the list
                </Link>
            </main>
        );
    }

    const currentProjectIndex = Projects.findIndex((item) => item.id === project.id);
    const nextProject = Projects[(currentProjectIndex + 1) % Projects.length];

    return (
        <main className="main-container project-page">
            <section className="project-hero">
                <section className="project-intro card card-dark">
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-category">//{projectCategoryName[project.category]}</p>
                    <p className="text">
                        {project.shortDescription}
                    </p>

                    <div className="project-actions">
                        <a
                            href={project.liveUrl}
                            className="project-button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See live &rarr;
                        </a>
                        <a
                            href={project.githubUrl}
                            className="project-button project-code-button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View code
                        </a>
                    </div>

                    <section className="project-stack">
                        <h2 className="project-section-label">Tech stack</h2>
                        <ul className="project-stack-list">
                            {project.stack.map((stackItem) => (
                                <li
                                    className={`tech-stack-list-item ${techStackClassName[stackItem as keyof typeof techStackClassName]}`}
                                    key={stackItem}
                                >
                                    <span className="visually-hidden">{stackItem}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>

                <div className="project-preview">
                    <img
                        src={sedonaImage}
                        alt="Sedona website preview"
                        className="project-preview-image"
                    />
                    <p className="project-note">{project.note}</p>
                </div>
            </section>

            <section className="project-details">
                <article className="project-info-card project-content-section card-stack card card-light">
                    <h2 className="content-header info-header">About the project</h2>
                    {renderParagraphs(project.about)}
                </article>

                <article className="challenge-card project-content-section card-stack card card-dark">
                    <h2 className="content-header info-header">The challenge</h2>
                    {renderParagraphs(project.challenge)}
                </article>
            </section>

            <section className="project-screenshots project-content-section">
                <h2 className="content-header project-screenshots-title">Screenshots</h2>
                <ul className="project-screenshot-list">
                    <li className="project-screenshot-item">
                        <img
                            src={sedonaImage}
                            alt="Sedona homepage screenshot"
                            className="project-screenshot-image"
                        />
                    </li>
                    <li className="project-screenshot-item">
                        <img
                            src={sedonaImage}
                            alt="Sedona modal screenshot"
                            className="project-screenshot-image"
                        />
                    </li>
                    <li className="project-screenshot-item">
                        <img
                            src={sedonaImage}
                            alt="Sedona catalog screenshot"
                            className="project-screenshot-image"
                        />
                    </li>
                </ul>
                <button
                    className="button-regular project-screenshot-next"
                    type="button"
                    aria-label="Show next screenshot"
                >
                    &rarr;
                </button>
            </section>

            <section className="project-summary">
                <article className="lessons-learned-card project-content-section card-stack card card-dark">
                    <h2 className="content-header">Lessons learned</h2>
                    {renderParagraphs(project.lessonLearned)}
                </article>

                <article className="project-highlights">
                    <h2 className="project-highlights-title">Highlights</h2>
                    <ul className="project-highlight-list">
                        {project.highlights.map((highlight) => (
                            <li className="decorated-text" key={highlight}>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="project-info-card project-content-section card-stack card card-light">
                    <h2 className="content-header">What I did</h2>
                    <ul className="project-work-list">
                        {project.whatIDid.map((workItem) => (
                            <li className="text" key={workItem}>
                                {workItem}
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <div className="project-navigation">
                <Link to={AppRoute.ProjectsList} className="button-regular">&larr; Back to the list</Link>
                <Link to={`/project/${nextProject.id}`} className="button-regular">Next project &rarr;</Link>
            </div>
        </main>
    );
}

export default ProjectPage;
