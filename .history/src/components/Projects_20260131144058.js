import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust – Full-Stack Web App',
      description:
        'Airbnb-like platform with authentication, listings, reviews, and image uploads. Clean MVC backend with secure auth.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Passport.js'],
      github: 'https://github.com/bhumikamourya/WanderLust',
      demo: 'https://wanderlust-project-3uh0.onrender.com/',
      image: '/assets/wanderlust.png',
    },
    {
      title: 'Food Ordering Web App',
      description:
        'Full-stack food ordering system with user authentication, order management, and REST APIs.',
      tech: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/bhumikamourya/Food-Ordering-application',
      demo: '',
      image: '/assets/foodweb.png',
    },
     {
      title: 'Food Ordering Web App',
      description:
        'Full-stack food ordering system with user authentication, order management, and REST APIs.',
      tech: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/bhumikamourya/Food-Ordering-application',
      demo: '',
      image: '/assets/foodweb.png',
    },
     {
      title: 'Food Ordering Web App',
      description:
        'Full-stack food ordering system with user authentication, order management, and REST APIs.',
      tech: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/bhumikamourya/Food-Ordering-application',
      demo: '',
      image: '/assets/foodweb.png',
    },
  ];

  return (
    <section
      id="projects"
      className=" reveal min-h-screen px-6 py-24"
    >
      <h2
        className="text-4xl font-extrabold text-center mb-16 heading">
        PROJECTS
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
