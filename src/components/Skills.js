import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "/assets/java.jpg" },
        { name: "JavaScript", icon: "/assets/js.webp" },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "/assets/react.png" },
        { name: "Redux", icon: "/assets/redux.png" },
        { name: "HTML5", icon: "/assets/html.png" },
        { name: "CSS3", icon: "/assets/css.png" },
        { name: "Tailwind CSS", icon: "/assets/TailwindCSS.webp" },
        { name: "Bootstrap", icon: "/assets/bootstrap.png" },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/assets/nodejs.png" },
        { name: "Express.js", icon: "/assets/express.png" },
        { name: "REST APIs", icon: "/assets/restful-api.png" },
        {
          name: "JWT & Passport.js",
          icon: "/assets/authentication.png",
        },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "/assets/mongoDB.png" },
        { name: "Mongoose", icon: "/assets/mongoose.png" },
        { name: "MySQL", icon: "/assets/SQL.webp" },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "/assets/git.png" },
        { name: "GitHub", icon: "/assets/github.png" },
        { name: "Postman", icon: "/assets/postman.png" },
        { name: "VS Code", icon: "/assets/VS-Code.png" },
        { name: "Render", icon: "/assets/render.png" },
        { name: "Netlify", icon: "/assets/netlify.webp" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="reveal flex items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 heading">
          TECHNICAL SKILLS
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12">
          Technologies and tools I use to build modern full-stack web
          applications.
        </p>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-5 ">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl transition-transform duration-300 hover:scale-105 skill-cards"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 mb-3 object-contain"
                    />

                    <p className="text-sm font-semibold text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;