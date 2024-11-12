import React from 'react';
import '../styles/ExperienceCard.css';

function ExperienceCard({ experience }) {
    return (
        <div className="experience-card">
            <h3>{experience.position} at {experience.company}</h3>
            <p>{experience.startDate} - {experience.endDate}</p>
            <ul>
                {experience.responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
            </ul>
        </div>
    );
}

export default ExperienceCard;
