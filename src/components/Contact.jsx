import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * This is the Contact component
 * @returns {JSX.Element} Contact component
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.init(userId);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get service and template IDs from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // For some reason VSCode is complaining about the icons (IDK)
  const contactInfo = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'CharlieIQ',
      href: 'https://github.com/CharlieIQ',
      color: 'text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'charlie-mclaughlin-s13',
      href: 'https://linkedin.com/in/charlie-mclaughlin-s13/',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="contact" className="section bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 text-center leading-relaxed">
            Always interested to meet new people and chat, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-card"
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Send me a message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <CheckCircle size={64} className="text-green-400 mx-auto animate-pulse" />
                </div>
                <h4 className="text-2xl font-semibold text-green-400 mb-4">Message Sent!</h4>
                <p className="text-gray-300 mb-8 text-lg">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-input resize-none"
                    placeholder="Give me a shout! I'd love to hear from you."
                  />
                </div>
                
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-info-item group"
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{info.label}</div>
                      <div className="text-white font-semibold text-lg">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;