import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    { title: 'Software Developer', company: 'Tech Corp', duration: '2026-Present', description: 'Developed web apps.' },
    // Add more
  ];

  return (
    <section id="experience" className="reveal min-h-screen flex items-center justify-center px-6">
      <div className="container">
        <h2>Experience & Education</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item">
            <h3>{exp.title} at {exp.company}</h3>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;