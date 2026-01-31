import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: '/assets/html.png' },
    { name: 'CSS3', icon: '/assets/css.png' },
    { name: 'JavaScript (ES6+)', icon: '/assets/js.webp' },
    { name: 'React', icon: '/assets/react.png' },
    { name: 'Redux', icon: '/assets/redux.png' },
    { name: 'Node.js', icon: '/assets/nodejs.png' },
    { name: 'Express.js', icon: '/assets/express.png' },
    { name: 'RESTful APIs', icon: '/assets/restful-api.png' },
    { name: 'Authentication (Passport.js, JWT)', icon: '/assets/authentication.png' },
    { name: 'MongoDB', icon: '/assets/mongoDB.png' },
    { name: 'Mongoose', icon: '/assets/mongoose.png' },
    { name: 'Git', icon: '/assets/git.png' },
    { name: 'GitHub', icon: '/assets/github.png' },
    { name: 'Postman', icon: '/assets/postman.png' },
    { name: 'Thunder Client', icon: '/assets/thunderClient.png' },
    { name: 'VS Code', icon: '/assets/VS-Code.png' },
    { name: 'Chrome DevTools', icon: '/assets/chrome-dev-tool.png' },
  ];

  return (
    <section
      id="skills"
      className="reveal flex items-center justify-center px-6 transition-colors duration-500"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl p-6"
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center heading"
        >
          SKILLS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 reveal">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-2xl transition-transform duration-300 hover:scale-105 skill-cards"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-2 object-contain"
              />
              <p
                className="text-sm font-semibold text-center"
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
