import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="reveal relative py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold heading">
            Get In Touch
          </h2>

          <p className="mt-4 max-w-2xl mx-auto">
            Open to Software Developer, Full Stack Developer,
            and Backend Developer opportunities.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto rounded-2xl p-10 card-bg shadow-xl text-center">

          <p className="mb-8 text-lg">
            I'm currently seeking full-time opportunities where I can
            contribute, learn, and grow as a software developer.
          </p>

          <div className="space-y-4 mb-8">

            <p className="text-lg">
              📧 bhumikamourya275@gmail.com
            </p>

            <p className="text-lg">
              📍 Indore, Madhya Pradesh
            </p>

          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/bhumikamourya"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-left px-5 py-3 rounded-full text-sm font-semibold transition color-buttons text-white"
             >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bhumika-mourya-bb94672a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal px-5 py-3 rounded-full text-sm font-semibold transition color-buttons text-white"
            >
              LinkedIn
            </a>

            <a
              href="/assets/Bhumika_Mourya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-right px-5 py-3 rounded-full text-sm font-semibold transition color-buttons text-white"
            >
              Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
