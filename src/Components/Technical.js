// Import React at the top of your file if not already imported
import React from 'react';
import './Technical.css';

const ProjectItem = ({ title, date, organization, skills, description, link }) => {
    return (
        <div className="project-container">
            <div className="project-header">
                <h3>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
            </div>
            <p className="project-organization">{organization}</p>
            <hr />
            <div className="project-skills">
                <h4>Skills</h4>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <hr />
            <p className="project-description">{description}</p>
        </div>
    );
};

const Technical = () => {
    return (
        <section className="column">
            <p className="tech">Technical Projects</p>
            <section className="row">
                {/* Project 1 */}
                <ProjectItem
                    title="Community Garden Database"
                    organization="CPSC 304 (Relational Databases) Final Project"
                    skills={[
                        'Web application development',
                        'Database management',
                        'SQL queries',
                        'HTML',
                        'PHP',
                    ]}
                    description="Implemented a web application for community garden planning, allowing querying for information about local community gardens, plants, and garden plot locations. Used Oracle’s SQLPlus to test queries."
                    link="https://github.com/em-il-yn/TheCommunityGardenDatabase"
                />

                {/* Project 2 */}
                <ProjectItem
                    title="WearWise Application"
                    organization="CPSC 210 (Software Construction) Final Project"
                    skills={[
                        'Java development',
                        'JUnit testing',
                        'Test-driven development',
                        'JSON parsing',
                    ]}
                    description="Developed Java-based functionality for users to track clothing wear count over time, generating data on cost per wear. Tested with JUnit, utilizing debugging techniques and test-driven development. Utilized JSON parsing skills to model data presented in JSON format."
                    link="https://github.com/em-il-yn/WearWise"
                />

                {/* Project 3 */}
                <ProjectItem
                    title="Personal Website"
                    organization="Personal Project"
                    skills={[
                        'ReactJS development',
                        'Interactive UI design',
                    ]}
                    description="Developed and designed this website using ReactJS. It demonstrates my technical skills, and provides an overview of my work."
                    link="https://em-il-yn.github.io/e.m.sim/"
                />
            </section>
        </section>
    );
};

export default Technical;
