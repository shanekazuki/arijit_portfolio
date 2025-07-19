import { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
// import ContactForm from './ContactForm';

export default function Portfolio() {
  const darkMode = true;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.95,
      transition: { duration: 0.5 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      } 
    }
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'dark' : 'light'}`}>
      <header className={`portfolio-header dark`}>
        <h1 className="portfolio-title">Arijit Bera</h1>
      </header>

      <main className="portfolio-main">
        <motion.section 
          id="home" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <div className="profile-section">
            <motion.div 
              className="profile-image-container"
              variants={profileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="profile-image">
                <img 
                  src="https://i.ibb.co/HjgHdC1/IMG-20250706-111836.jpg" 
                  alt="Arijit Bera" 
                  className="profile-pic"
                />
              </div>
            </motion.div>
            
            <motion.div className="profile-info" variants={itemVariants}>
              <h2 className="section-title">👋 Hello!</h2>
              <p className="profile-description">I'm Arijit, a passionate Frontend Developer, Full-Stack Developer, and Video Editor.</p>
              <div className="profile-tags">
                <span className="profile-tag">Frontend Developer</span>
                <span className="profile-tag">Full-Stack Developer</span>
                <span className="profile-tag">Video Editor</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="about" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
          <motion.p variants={itemVariants}>
            Passionate about learning emerging technologies and solving real-world problems through innovative
            software solutions. A dedicated BCA student with a strong grasp of programming, web development,
            and database systems. Eager to contribute to dynamic tech-driven environments and grow as a skilled
            software developer.
          </motion.p>
        </motion.section>

        <motion.section 
          id="education" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Education</motion.h2>
          <div className="education-grid">
            {[
              {
                degree: "BCA (Bachelor of Computer Applications)",
                status: "GRADUATE",
                description: "Bachelor's degree in Computer Applications with focus on programming, web development, and database systems."
              },
              {
                degree: "ISC (Class XII)",
                status: "Completed",
                description: "Higher Secondary Education with Computer Science as main subject."
              },
              {
                degree: "ICSE (Class X)",
                status: "Completed", 
                description: "Secondary Education with strong foundation in core subjects."
              }
            ].map((edu, index) => (
              <motion.div 
                key={edu.degree}
                className={`education-card ${darkMode ? 'dark' : 'light'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-status">
                    <span className="status-badge">{edu.status}</span>
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Skills</motion.h2>
          <div className="skills-list">
            {['HTML', 'CSS', 'React', 'Java', 'MySQL', 'C++'].map((skill, index) => (
              <motion.div 
                key={skill}
                className={`skill-item ${darkMode ? 'dark' : 'light'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Projects</motion.h2>
          <div className="projects-grid">
            {[
              {
                title: "Online Auction System",
                description: "A web-based platform to facilitate online auctions with real-time bidding features and secure user handling.",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Online Trek Booking System",
                description: "A full-stack application allowing users to book trekking destinations based on preferences, built using React, Java, and MySQL.",
                tech: ["React", "Java", "MySQL"]
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className={`project-card ${darkMode ? 'dark' : 'light'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className={`portfolio-section ${darkMode ? 'dark' : 'light'} fade-in`} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Contact</motion.h2>
          <div className="contact-info">
            {[
              { icon: "📧", label: "Email", value: "arijitber@gmail.com", link: "mailto:arijitber@gmail.com" },
              { icon: "📱", label: "Phone", value: "8777463794" },
              { icon: "🐙", label: "GitHub", value: "github.com/shanekazuki", link: "https://github.com/shanekazuki" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/arijit-bera", link: "https://www.linkedin.com/in/arijit-bera-430560248/" }
            ].map((contact, index) => (
              <motion.div 
                key={contact.label}
                className={`contact-item ${darkMode ? 'dark' : 'light'}`}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <span>{contact.icon} {contact.label}:</span>
                {contact.link ? (
                  <a href={contact.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                    {contact.value}
                  </a>
                ) : (
                  <span>{contact.value}</span>
                )}
              </motion.div>
            ))}
          </div>
          {/* <ContactForm /> Removed */}
        </motion.section>
      </main>

      <footer className={`portfolio-footer ${darkMode ? 'dark' : 'light'}`}>
        <p>© {new Date().getFullYear()} Arijit Bera. All rights reserved.</p>
      </footer>
    </div>
  );
}
