import React from "react";


const About = () => {
  return (
    <section
      id="about"
      className="reveal min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="reveal-left">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide heading"
            >
              ABOUT ME
            </h2>

            <p
              className="mb-4 leading-relaxed"
            >
              Hi! I'm <span className="font-semibold">Bhumika</span>, a Full Stack Developer passionate about building scalable and user-focused web applications.
            </p>

            <p
              className="mb-4 leading-relaxed"
            >
              I have hands-on experience developing complete applications using React.js, Node.js, Express.js, and MongoDB, including frontend interfaces, backend APIs, authentication systems, and database management.
            </p>

            <ul
              className="space-y-2 text-sm"
            >
              <li>✦ MERN Stack Development</li>
              <li>✦ REST API Development</li>
              <li>✦ Authentication & Authorization</li>
              <li>✦ AI-Powered Web Applications</li>
              <li>✦ Continuous Learning & Problem Solving</li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
