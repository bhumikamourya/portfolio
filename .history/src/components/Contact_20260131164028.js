import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className=" reveal relative py-24 "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading">Get In Touch</h2>
          <p className="mt-4 max-w-xl mx-auto">
            Let's collaborate and build something meaningful together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT INFO */}
          <div className=" space-y-6 reveal-left">
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-3 text-sm">
              <p>📧 bhumikamourya275@gmail.com</p>
              <p>📍 India</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/bhumikamourya"
                // target="_blank"
                // rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-pink-500/20 transition text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bhumika-mourya-bb94672a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-pink-500/20 transition text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl backdrop-blur-xl p-8 shadow-xl border border-white/10 shadow-xl card-bg"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/50 border border-dark px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-pink-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/50 border border-dark px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-pink-500"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/50 border border-dark px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-pink-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-full text-white font-medium hover:opacity-90 transition color-buttons"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
