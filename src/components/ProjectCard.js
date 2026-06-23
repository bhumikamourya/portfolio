import React from "react";

const ProjectCard = ({
title,
description,
tech,
github,
demo,
image,
featured = false,
}) => {
return ( <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl card-bg flex flex-col h-full">

  {/* Featured Badge */}
  {featured && (
    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-yellow-400 text-black z-10">
      Featured
    </span>
  )}

  {/* Project Image */}
  <div className="h-52 bg-black/10 flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-grow">

    {/* Title */}
    <h3 className="text-lg font-bold mb-3 heading">
      {title}
    </h3>

    {/* Description */}
    <p className="text-sm leading-relaxed mb-5 flex-grow">
      {description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-5">
      {tech.slice(0, 6).map((item, index) => (
        <span
          key={index}
          className="text-xs px-3 py-1 rounded-full tags"
        >
          {item}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-auto">

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-xs font-semibold rounded-full text-white color-buttons transition hover:scale-105"
      >
        GitHub
      </a>

      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-semibold rounded-full border transition hover:scale-105"
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
