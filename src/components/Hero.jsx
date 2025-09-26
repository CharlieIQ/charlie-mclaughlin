import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Download, ExternalLink, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
      {
        icon: <Github size={20} />,
        href: "https://github.com/CharlieIQ",
        label: "GitHub"
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/charlie-mclaughlin-s13/",
        label: "LinkedIn"
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:charliermclaughlin@gmail.com",
        label: "Email"
      }
    ];
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi! I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Charlie
              </span>
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-white/10 rounded-lg transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              3rd Year Computer Science Student at Dalhousie University
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12">
              Incoming Intern at Lockheed Martin, Previously SWE Intern at Cognizant & 2x Intern @ IBM
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#contact"
              className="btn-secondary"
            >
              Get In Touch
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="btn-primary"
            >
              <Download size={20} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="badge">React</span>
              <span className="badge">Python</span>
              <span className="badge">Java</span>
              <span className="badge">Rust</span>
              <span className="badge">Flask</span>
              <span className="badge">Node.js</span>
              <span className="badge">GCP</span>
              <span className="badge">Firebase</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
