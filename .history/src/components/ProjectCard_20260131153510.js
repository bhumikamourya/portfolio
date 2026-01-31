import React from 'react';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 card-bg"
    >
      {/* IMAGE */}
      <div className="h-44 bg-black/20 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3
          className="text-lg font-bold mb-2 heading">
          {title}
        </h3>

        <p
          className="text-sm mb-4 leading-relaxed"
        >
          {description}
        </p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full tags"
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-3 ">
          <a
            href={github}
            rel="noreferrer"
            className="px-4 py-2 text-white text-xs font-semibold rounded-full transition  color-buttons"

          >
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold bg-white rounded-full border transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
