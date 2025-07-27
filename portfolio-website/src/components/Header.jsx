import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'header-glass' : 'bg-transparent'
        }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Charlie McLaughlin
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
                </a>
              ))}
            </div>


          </div>
        </nav>


      </div>
    </header>
  );
};

export default Header;
