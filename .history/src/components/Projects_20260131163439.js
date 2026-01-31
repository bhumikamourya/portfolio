import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust – Full-Stack Web App',
      description:
        'Airbnb-like platform with authentication, listings, reviews, and image uploads. Clean MVC backend with secure auth.',
      tech: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Passport.js',
        'Session-based Authentication',
        'REST APIs',
        'EJS',
        'MVC Architecture',
        'Cloudinary',
        'Multer',
        'CSS',
        'Git'
      ],
      github: 'https://github.com/bhumikamourya/WanderLust',
      demo: 'https://wanderlust-project-3uh0.onrender.com/',
      image: '/assets/wanderlust.png',
    },
    {
      title: 'Food Ordering Web App',
      description:
        'Full-stack food ordering system with user authentication, order management, and REST APIs.',
      tech: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT Authentication',
        'REST APIs',
        'MVC Architecture',
        'EJS',
        'CSS',
        'Git'
      ],
      github: 'https://github.com/bhumikamourya/Food-Ordering-application',
      demo: '',
      image: '/assets/foodweb.png',
    },
    {
      title: 'Health Monitoring Application',
      description:
        'Full-stack web application to track daily health metrics like water intake, calories, sleep, weight, heart rate, blood pressure, and more with user authentication and dashboard analytics.',
      tech: ['React',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT Authentication',
        'REST APIs',
        'Recharts',
        'Axios',
        'CSS',
        'Git'],
      github: 'https://github.com/bhumikamourya/health-monitoring-application',
      demo: '',
      image: '/assets/Htracker.png',
    },
    {
      title: 'Zerodha Clone',
      description:
        'Replica of the Zerodha stock trading platform featuring frontend UI, dashboard, and basic trading components using modern web stack.',
      tech: ['React',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'CSS',
        'Charting Libraries',
        'Git'],
      github: 'https://github.com/bhumikamourya/Zerodha_Clone',
      demo: '',
      image: '/assets/zerodha.png',
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

      <div className="reveal max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
