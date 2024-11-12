import React from 'react';
import AnimationWrapper from './AnimationWrapper';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import ProjectCard from './ProjectCard';
import '../styles/ResumeSection.css';

function ResumeSection({ data }) {
    return (
        <div className="resume-section">
            <h2>Objective</h2>
            <AnimationWrapper><p>{data.objective}</p></AnimationWrapper>

            <h2>Skills</h2>
            <AnimationWrapper>
                <ul>
                    {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </AnimationWrapper>

            <h2>Work Experience</h2>
            <AnimationWrapper>
                {data.workExperience.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </AnimationWrapper>

            <h2>Education</h2>
            <AnimationWrapper>
                {data.education.map((education, index) => (
                    <EducationCard key={index} education={education} />
                ))}
            </AnimationWrapper>

            <h2>Projects</h2>
            <AnimationWrapper>
                {data.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </AnimationWrapper>
        </div>
    );
}

export default ResumeSection;
