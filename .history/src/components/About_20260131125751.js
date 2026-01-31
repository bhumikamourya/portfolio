import React from "react";


const About = () => {
  return (
    <section
      id="about"
      className=" reveal min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide heading"
            >
              ABOUT ME
            </h2>

            <p
              className="mb-4 leading-relaxed"
            >
              Hi! I'm <span className="font-semibold">Bhumika</span>, a passionate
              and creative Frontend Developer who loves building clean,
              user-focused interfaces.
            </p>

            <p
              className="mb-4 leading-relaxed"
            >
              I focus on modern web design, responsive layouts, and smooth
              interactions that balance beauty with performance.
            </p>

            <ul
              className="space-y-2 text-sm"
            >
              <li>✦ React, Tailwind CSS, JavaScript</li>
              <li>✦ UI/UX-focused development</li>
              <li>✦ Clean code & scalable structure</li>
              <li>✦ Always learning new technologies</li>
            </ul>
          </div>

          {/* RIGHT AVATAR CARD */}
          <div className="flex justify-center ">
            <div
              className="relative rounded-2xl p-4 right-card shadow-2xl"
            >
              <img
                src="/assets/profile.jpeg"
                alt="Avatar"
                className="w-72 h-72 object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
