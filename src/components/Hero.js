import React from "react";
const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="hero"
      className=" reveal min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="reveal-left">
            <span
              className="inline-block mb-3 text-xs px-3 py-1 rounded-full font-semibolds text-emerald-700 right-card tags"
            >
              Open to Full-Time Opportunities
            </span>

            <h1
              className="text-4xl md:text-5xl text-center md:text-left font-extrabold leading-tight mb-2 heading"
            >
              Hi, I'm{" "}
              <span className="text-accent"
              >
                Bhumika
              </span>
            </h1>
            <div className="mb-4">
              <h2
                className="text-xl text-center md:text-left font-semibold subheading"
              >
                Full Stack Developer
              </h2>
              <p>Specialized in MERN Stack & Backend Development</p>
            </div>

            <p
              className="max-w-md mb-6 text-center md:text-left"
            >
              Computer Science graduate with hands-on experience building full-stack web applications, RESTful APIs, authentication systems, and AI-powered solutions using the MERN stack.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start item-center text-sm gap-4 mb-6">
              <a
                href="/assets/Bhumika_Mourya_Resume-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-4 py-2 rounded-full text-white font-semibold transition hover:scale-105 color-buttons">
                  Download CV
                </button>
              </a>
              <button onClick={() => scrollToSection("projects")}
                className="px-4 py-2 rounded-full bg-slate-900 text-white  hover:bg-slate-800 transition">
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span>Follow me:</span>

              <a
                href="https://github.com/bhumikamourya"
                className="text-2xl hover:scale-110 transition"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/bhumika-mourya-bb94672a4/"
                className="text-2xl hover:scale-110 transition"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex justify-center mb-5 md:mt-0">
            <div
              className="relative rounded-2xl right-card shadow-2xl"
            >
              <img
                src="/assets/profile.jpeg"
                alt="Bhumika Mourya"
                className="w-80 h-70 md:w-72 md:h-72 object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
