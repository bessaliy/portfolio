import heroPhoto from '../../img/Me_with_border.png';
import {Link} from "react-router-dom";
import {AppRoute, LinkRoute} from "../../const.ts";

function MainPage() {
    return (
        <main className="main-container">
            <section className="hero">
                <div className="hero-text">
                    <span className="hero-text-accent">Hi! I'm Liza</span>
                    <h1 className="hero-text-header">Frontend Developer</h1>
                    <p className="hero-text-text">From creating by hand to crafting for the web. Using AI to extend ideas and give them depth.</p>
                    <Link to={AppRoute.ProjectsList} className="hero-text-button button-regular">See My Work</Link>
                    <div className="contacts">
                        <p className="contacts-text">I'm online: </p>
                        <ul className="contacts-list">
                            <li className="contacts-list-item linkedin">
                                <a
                                    href={LinkRoute.LinkedIn}
                                    className="contacts-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden">LinkedIn</span>
                                </a>
                            </li>
                            <li className="contacts-list-item telegram">
                                <a
                                    href={LinkRoute.Telegram}
                                    className="contacts-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden">Telegram</span>
                                </a>
                            </li>
                            <li className="contacts-list-item github">
                                <a
                                    href={LinkRoute.GitHub}
                                    className="contacts-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden">GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hero-picture">
                    <div className="hero-picture-block">
                        <img src={heroPhoto} alt="My photo" className="hero-photo" />
                            <span className="hero-photo-accent">Based online</span>
                    </div>
                </div>

                <ul className="hero-facts-list">
                    <li className="hero-facts-item fact-making">
                        <span className="hero-facts-accent">10+</span>
                        <p className="hero-facts-text">Years of making things</p>
                    </li>
                    <li className="hero-facts-item fact-learning">
                        <span className="hero-facts-accent">300+</span>
                        <p className="hero-facts-text">Hours of learning and building</p>
                    </li>
                    <li className="hero-facts-item fact-curious">
                        <span className="hero-facts-accent">&infin;</span>
                        <p className="hero-facts-text">Curious mind</p>
                    </li>
                </ul>
            </section>

            <div className="main-page-content">
                <section className="tech-stack-card card card-light">
                    <h2 className="tech-stack-header">Tech stack</h2>
                    <ul className="tech-stack-list">
                        <li className="tech-stack-list-item html">
                            <span className="visually-hidden">Html-5</span>
                        </li>
                        <li className="tech-stack-list-item css">
                            <span className="visually-hidden">CSS</span>
                        </li>
                        <li className="tech-stack-list-item javascript">
                            <span className="visually-hidden">JavaScript</span>
                        </li>
                        <li className="tech-stack-list-item typescript">
                            <span className="visually-hidden">TypeScript</span>
                        </li>
                        <li className="tech-stack-list-item react">
                            <span className="visually-hidden">React</span>
                        </li>
                        <li className="tech-stack-list-item redux">
                            <span className="visually-hidden">Redux</span>
                        </li>
                        <li className="tech-stack-list-item figma">
                            <span className="visually-hidden">Figma</span>
                        </li>
                        <li className="tech-stack-list-item react-router">
                            <span className="visually-hidden">React-Router</span>
                        </li>
                        <li className="tech-stack-list-item github">
                            <span className="visually-hidden">GitHub</span>
                        </li>
                        <li className="tech-stack-list-item next">
                            <span className="visually-hidden">Next.js</span>
                        </li>
                    </ul>
                    <span className="tech-stack-text">...And more</span>
                </section>

                <section className="info-card main-content-card card-stack card card-dark">
                    <h2 className="content-header info-header">Who am I?</h2>
                    <div className="text info-text">
                        <p>
                            I enjoy figuring things out.
                        </p>
                        <p>
                            Over the years, I've worked in very different fields, but one thing has always
                            stayed the same: my curiosity. Whether I'm learning a new technology or building
                            something from scratch, I thoroughly explore the details, connect the pieces,
                            and turn uncertainty into understanding.
                        </p>
                        <p>
                            Frontend development gives me exactly that challenge.
                        </p>
                    </div>
                    <a href="#" download className="info-button button-regular">Download CV</a>
                </section>

                <span className="content-decorated-text card-accent">
            Human-made,
            <br/>
            AI-assisted
        </span>

                <section className="additional-info-card main-content-card card-stack card card-dark">
                    <h3 className="content-header">What I do?</h3>
                    <ul className="additional-info-list">
                        <li className="text additional-info-item">Turning ideas into interfaces</li>
                        <li className="text additional-info-item">Solving frontend puzzles</li>
                        <li className="text additional-info-item">Building responsive web-apps</li>
                        <li className="text additional-info-item">Exploring new technologies</li>
                    </ul>
                </section>

                <section className="explore">
                    <Link to={AppRoute.ProjectsList} className="explore-button explore-main card card-light">Explore projects</Link>
                    <a href="#" className="explore-button explore-accent card card-dark">See experiments</a>
                </section>

                <section className="quests-card main-content-card card-stack card card-light">
                    <h3 className="content-header">Current quests</h3>
                    <ul className="quests-list">
                        <li className="text icon-list-item quests-list-item quest-detective">Building detective game prototype inspired by Sherlock Holmes</li>
                        <li className="text icon-list-item quests-list-item quest-portfolio">Portfolio redesign</li>
                        <li className="text icon-list-item quests-list-item quest-toolkit">Expanding my toolkit</li>
                    </ul>
                </section>

                <section className="contact-card main-content-card card-stack card card-dark">
                    <span className="accent-sticker smile"></span>
                    <h3 className="content-header">Let's work together!</h3>
                    <p className="text contact-card-text">I'm currently available for freelance projects or full-time opportunities!</p>
                    <ul className="contact-list">
                        <li className="text icon-list-item contact-list-item contact-mail">
                            <a
                                href="mailto:bessy8295@gmail.com?subject=Let's work!"
                                className="contact-list-link"
                            >
                                bessy8295@gmail.com
                            </a>
                        </li>
                        <li className="text icon-list-item contact-list-item contact-telegram">
                            <a
                                href={LinkRoute.Telegram}
                                className="contact-list-link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                t.me/me_raccoon
                            </a>
                        </li>
                        <li className="text icon-list-item contact-list-item contact-location">
                            Remote/Worldwide
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default MainPage;
