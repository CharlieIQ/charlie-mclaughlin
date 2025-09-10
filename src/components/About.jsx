import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';

/**
 * This is the About component
 * @returns {JSX.Element} About component
 */
const About = () => {
  // Made my skills into an object for better organization
  const skills = {
    languages: [
      'Java', 'Python', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Rust'
    ],
    frameworks: [
      'React', 'Node.js', 'Flask', 'Tailwind CSS', 'Jest', 'Vitest', 'JUnit'
    ],
    tools: [
      'Git', 'Google Cloud', 'Firebase', 'VS Code', 'IntelliJ', 'MySQL', 'QGIS'
    ]
  };

  const facts = [
    'My programming language project is named after my dog Finn',
    'My favourite sorting algorithm is BogoSort',
    'On my first week of my Cognizant internship, I accidentally committed a node_modules folder to main',
    'Even though I know C, it remains the bane of my existence',
    'I cannot write Java without being under the influence of caffeine',
    'I have visited 14 countries outside of Canada',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 text-center">
            I'm a passionate computer science student with experience in full-stack development, cloud technologies, GenAI, and a love for creating innovative solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <Code className="text-blue-400" size={28} />
              My Journey
            </h3>
            <div className="space-y-6 text-gray-300">
              <p>
                Currently in my 3rd year at Dalhousie University studying Computer Science 
                with a 4.01 GPA. I've had the opportunity to work as a Software Engineering 
                Intern at Cognizant and completed two internships at IBM.
              </p>
              <p>
                My experience spans full-stack development, from creating responsive React 
                frontends to building robust Python Flask backends. I'm very interested in
                generative AI, and I'm working it into more of my projects.
              </p>
              <p>
                In my free time, I'm working on various personal projects, drinking coffee,
                and travelling. Most recently I spent 3 weeks backpacking through Eastern Europe!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <Globe className="text-green-400" size={28} />
              Fun Facts About Me
            </h3>
            <div className="space-y-4">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-4">
            <Database className="text-purple-400" size={32} />
            Technical Skills
          </h3>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card">
              <h4 className="text-xl font-semibold mb-6 text-blue-400 flex items-center gap-6">
                <Code size={20} />
                Languages
              </h4>
              <div className="flex flex-wrap gap-4">
                {skills.languages.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-6 text-green-400 flex items-center gap-6">
                <Globe size={20} />
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-4">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-6 text-purple-400 flex items-center gap-6">
                <Database size={20} />
                Developer Tools
              </h4>
              <div className="flex flex-wrap gap-4">
                {skills.tools.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
