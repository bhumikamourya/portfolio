import React from "react";
const Hero = () => {
  return (
    <section
      id="hero"
      className=" reveal min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl p-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="reveal-left">
            <span
              className="inline-block mb-3 text-xs px-3 py-1 rounded-full font-semibolds text-emerald-700 right-card tags"
            >
              Available for freelance work
            </span>

            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 heading"
            >
              Hi, I'm{" "}
              <span className="text-accent"
              >
                Bhumika
              </span>
            </h1>
            <h2
              className="text-xl md:text-2xl font-semibold mb-4 subheading"
            >
              Frontend Developer
            </h2>

            <p
              className="max-w-md mb-6"
            >
              I create scalable, clean and user-focused web applications with
              strong UI sense and solid backend logic.
            </p>

            <div className="flex gap-4 mb-6">
              {/* <button
                className="px-6 py-2 rounded-full text-white font-semibold transition hover:scale-105 color-buttons"
              >
                Hire Me
              </button> */}
              <a href="/assets/BhumikaMourya.pdf">
              <button
                className="px-4 py-2 rounded-full text-white font-semibold transition hover:scale-105 color-buttons">
                Download CV
              </button>
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span>Follow me:</span>
              <a href="https://github.com/bhumikamourya" 
              className="cursor-pointer hover:underline cursor-pointer pink-500/20">GitHub</a>
              <a href="https://www.linkedin.com/in/bhumika-mourya-bb94672a4/" 
              className="cursor-pointer hover:underline cursor-pointer">LinkedIn</a>
              {/* <a href="" className="cursor-pointer hover:underline cursor-pointer">Instagram</a> */}
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl right-card shadow-2xl"
            >
              <img
                src="/assets/profile.jpeg"
                alt="Developer illustration"
                className="w-72 h-70 object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
