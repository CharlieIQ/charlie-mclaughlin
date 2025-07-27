import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Bot, Gamepad2, Code2, Map, Grid3X3, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * This is the Projects component
 * Displays a carousel of projects with details, screenshots, and links
 * @returns {JSX.Element} Projects component
 */
const Projects = () => {
  // Can add to thus dynamically if needed (woo)
  const projects = [
    {
      title: 'Agentic AI Devteam',
      description: 'An AI-powered software development team using CrewAI to automate full-stack app prototyping. Features a Python Flask server managing frontend API calls and a React-based UI for project requirements.',
      longDescription: [
        'Developed an agentic AI-powered software team using CrewAI to automate full-stack app prototyping',
        'Created a Python Flask server to manage frontend API calls to the AI development team',
        'Designed a React-based UI for users to submit project requirements and receive auto generated code'
      ],
      technologies: ['React', 'CrewAI', 'Python', 'Flask', 'AI/ML'],
      github: 'https://github.com/CharlieIQ/agentic-devteam-ai',
      live: null,
      date: 'July 2025 - Present',
      icon: Bot,
      screenshots: ["/images/devteam.png"]
    },
    {
      title: 'Piggle',
      description: 'An interactive browser-based puzzle game built with React. Features real-time player accounts, leaderboards, a functional level editor, and user-generated content browser.',
      longDescription: [
        'Designed and developed an interactive browser based puzzle game using React',
        'Implemented Firestore to manage player accounts, levels, and leaderboard data in real time',
        'Developed a functional level editor, and a level browser dashboard for user created content'
      ],
      technologies: ['React', 'CSS', 'Firebase', 'Cloud Firestore'],
      github: null,
      live: 'https://charlieiq.github.io/piggle/',
      date: 'February 2025 - Present',
      icon: Gamepad2,
      screenshots: ["/images/piggle.png"]
    },
    {
      title: 'Finnlang',
      description: 'A custom programming language built in Rust, named after my dog Finn. Features modern syntax design and efficient compilation.',
      longDescription: [
        'Built a complete programming language from scratch using Rust',
        'Implemented lexical analysis, parsing, and code generation',
        'Designed modern syntax with focus on developer experience'
      ],
      technologies: ['Rust', 'Compiler Design', 'Language Implementation'],
      github: 'https://github.com/CharlieIQ/finnlang',
      live: null,
      date: 'Ongoing',
      icon: Code2,
      screenshots: ["/images/finnlang.png"]
    },
    {
      title: 'Yarmouth County Accessibility Map',
      description: 'A comprehensive GIS-based web map featuring 400+ accessible locations across Yarmouth County. Used by residents and tourists with accessibility needs.',
      longDescription: [
        'Created a map of all accessible points in Yarmouth County Nova Scotia',
        'Used QGIS and ArcGIS for plotting the points and Git for project management',
        'Created an interactive front end website to display the map using HTML and JavaScript',
        'Map is used by residents with accessibility needs in Yarmouth County, and tourists coming to the area'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'QGIS', 'ArcGIS'],
      github: null,
      live: 'https://charlieiq.github.io/accessibility_mapping_project/',
      date: 'February 2023 - August 2024',
      icon: Map,
      screenshots: ["/images/accessibility_map.png"]
    },
    {
      title: 'Bingo Card Maker',
      description: 'A customizable bingo card generator built with React. Allows users to create personalized bingo cards for events and games.',
      longDescription: [
        'Built a React application for generating custom bingo cards that can be downloaded as images',
        'Implemented dynamic card generation with user-defined content',
        'Created for the purpose of movie watching parties, but can be used for any bingo game'
      ],
      technologies: ['React', 'JavaScript', 'CSS'],
      github: null,
      live: null,
      date: '2024',
      icon: Grid3X3,
      screenshots: ["/images/bingo.png"]
    }
  ];

  // Carousel state
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    setCurrent(idx);
    resetInterval();
  };

  const prev = () => {
    setCurrent((prevIdx) => {
      const newIdx = (prevIdx - 1 + projects.length) % projects.length;
      resetInterval();
      return newIdx;
    });
  };

  const next = () => {
    setCurrent((prevIdx) => {
      const newIdx = (prevIdx + 1) % projects.length;
      resetInterval();
      return newIdx;
    });
  };

  // Auto-scroll logic
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prevIdx) => (prevIdx + 1) % projects.length);
    }, 6000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h2>
          <p className="text-xl text-gray-300 text-center">
            Here's a few of my public projects that I've worked on recently.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="carousel-container overflow-hidden rounded-2xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="carousel-card"
            >
              {(() => {
                const project = projects[current];
                const IconComponent = project.icon;
                return (
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Project Image/Screenshot */}
                    <div className="relative">
                      {project.screenshots && project.screenshots.length > 0 ? (
                        <div className="screenshot-container">
                          <img
                            src={`${import.meta.env.BASE_URL}${project.screenshots[0].replace(/^\//, '')}?v=1`}
                            alt={`${project.title} screenshot`}
                            className="w-full h-72 md:h-96 object-cover rounded-xl border border-gray-700 shadow-2xl"
                            onError={e => {
                              console.error('Image failed to load:', project.screenshots[0]);
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-72 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                          <div className="text-center">
                            <div className="p-8 bg-blue-500/10 rounded-full border border-blue-500/20 inline-block mb-6">
                              <IconComponent className="text-blue-400" size={64} />
                            </div>
                            <p className="text-gray-400">Project Preview</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <IconComponent className="text-blue-400" size={20} />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar size={14} />
                            <span>{project.date}</span>
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="badge text-xs">{tech}</span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex-1 justify-center"
                          >
                            <Github size={18} />
                            View Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 justify-center"
                          >
                            <ExternalLink size={18} />
                            Try it out!
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="carousel-nav-btn left-6"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="carousel-nav-btn right-6"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`carousel-dot ${idx === current ? 'active' : ''}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container mt-6">
            <div 
              className="progress-bar"
              style={{ 
                animation: `progress 6s linear infinite`,
                animationPlayState: 'running'
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/CharlieIQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
