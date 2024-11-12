import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const AnimatedResume = ({ data }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const linkedin = data.contactInformation.linkedin;
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const Header = () => (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8"
    >
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.name}
      </motion.h1>
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{data.address}</span>
        </div>
      </div>
    </motion.header>
  );

  const Section = ({ title, children }) => (
    <motion.div 
      className="mb-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerChildren}
    >
      <motion.h2 
        className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2"
        variants={fadeIn}
      >
        {title}
      </motion.h2>
      {children}
    </motion.div>
  );

  const ExperienceCard = ({ experience }) => (
    <motion.div 
      variants={fadeIn}
      className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{experience.position}</h3>
        <span className="text-sm text-gray-500">{experience.startDate} - {experience.endDate}</span>
      </div>
      <p className="text-blue-600 mb-2">{experience.company}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx} className="hover:text-blue-600 transition-colors duration-200">
            {resp}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const EducationCard = ({ education }) => (
    <motion.div 
      variants={fadeIn}
      className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{education.degree}</h3>
      <p className="text-blue-600 mb-2">{education.institution}</p>
      <p className="text-gray-500">Graduation: {education.graduationDate}</p>
    </motion.div>
  );

  const ProjectCard = ({ project }) => (
    <motion.div 
      variants={fadeIn}
      className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {project.keyFeatures.map((feature, idx) => (
          <li key={idx} className="hover:text-blue-600 transition-colors duration-200">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const Footer = () => (
    <motion.footer 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-8"
    >
      <div className="flex justify-center gap-6">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        {/* <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
          <GitHub className="w-5 h-5" />
          <span>GitHub</span>
        </a> */}
      </div>
    </motion.footer>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <Header />
      
      <Section title="Objective">
        <motion.p 
          variants={fadeIn}
          className="text-gray-600 leading-relaxed"
        >
          {data.objective}
        </motion.p>
      </Section>

      <Section title="Skills">
        <motion.div 
          variants={fadeIn}
          className="flex flex-wrap gap-3"
        >
          {data.skills.map((skill, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </Section>

      <Section title="Work Experience">
        {data.workExperience.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Section>

      <Section title="Education">
        {data.education.map((edu, idx) => (
          <EducationCard key={idx} education={edu} />
        ))}
      </Section>

      <Section title="Projects">
        {data.projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </Section>

      <Footer />
    </div>
  );
};

export default AnimatedResume;