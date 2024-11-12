import React from 'react';
import '../styles/EducationCard.css';

function EducationCard({ education }) {
    return (
        <div className="education-card">
            <h3>{education.degree} at {education.institution}</h3>
            <p>Graduation Date: {education.graduationDate}</p>
        </div>
    );
}

export default EducationCard;
