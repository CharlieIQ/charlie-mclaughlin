import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

/**
 * This is the Experience component
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
  // I ripped ALL of this from my resume lol
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Cognizant',
      location: 'Halifax, NS',
      duration: 'May 2025 - July 2025',
      description: [
        'Developed a full-stack chat bot application to assist technical support teams using the Google Cloud Platform',
        'Led the front end development in ReactJS, and assisted the backend development using the Python Flask framework',
        'Set up CI/CD pipelines to automate testing using Vitest and deployment through Google Cloud Build',
        'Participated in Scrum ceremonies to support Agile delivery and team alignment'
      ],
      technologies: ['React', 'Python', 'Flask', 'GCP', 'Vitest', 'CI/CD']
    },
    {
      title: 'GIS Technician',
      company: 'Town of Yarmouth',
      location: 'Yarmouth, NS',
      duration: 'February 2023 - August 2024',
      description: [
        'Co-developed a GIS-based web map featuring 400+ accessible locations across Yarmouth County using QGIS/ArcGIS',
        'Managed version control and collaboration using Git',
        'The project was deployed using HTML & JavaScript and is being widely used by residents of the county'
      ],
      technologies: ['JavaScript', 'HTML', 'QGIS', 'ArcGIS', 'Git']
    },
    {
      title: 'Software & Security Intern',
      company: 'IBM',
      location: 'Halifax, NS',
      duration: 'July 2022 - August 2023',
      description: [
        'Developed and deployed a company wide acronym bot using JavaScript, PHP, and SQL in collaboration with frontend and project management teams',
        'Enhanced security event documentation and classified incidents for a large scale SIEM product',
        'Automated SIEM product updates using Python, improving response efficiency',
        'Utilized GitHub for team collaboration, with the bot project now in active company use'
      ],
      technologies: ['JavaScript', 'PHP', 'SQL', 'Python', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="section bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <p className="text-xl text-gray-300 text-center">
            My professional journey and academic background in computer science
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Professional Experience</h3>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">
                    <div className="flex items-center gap-4 mb-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="badge text-xs">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
