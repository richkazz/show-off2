import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <p>{project.description}</p>
            <ul>
                {project.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
        </div>
    );
}

export default ProjectCard;
