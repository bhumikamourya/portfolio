import React from "react";


const Welcome = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            className=" min-h-screen flex items-center justify-center px-6"
        >
            <div
                className="relative w-full max-w-6xl rounded-2xl shadow-2xl p-6 card-bg mt-5 md:p-16"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="reveal-left">

                        <h1
                            className="text-4xl text-center md:text-left md:text-5xl font-extrabold leading-tight mb-4 heading">
                            Welcome to <br /> my Portfolio Website
                        </h1>
                        <p
                            className="max-w-md mb-6 text-center md:text-left">
                            Building full-stack web applications, REST APIs, authentication systems, and AI-powered solutions using the MERN stack.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mb-6 ">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>

                                <span className="text-xs font-semibold text-emerald-600">
                                    Open to Full-Time Opportunities
                                </span>
                            </div>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="px-4 py-2 rounded-full bg-slate-900 text-white  hover:bg-slate-800 transition"
                            >
                                PROJECTS
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 transition"
                            >
                                CONTACT
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SYSTEM CARD */}
                    <div className="relative rounded-xl p-6 border right-card mt-10 md:mt-0">

                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold heading">
                                Developer Snapshot
                            </h3>

                            <div className="flex items-center gap-2">

                                <span className="text-xs font-semibold text-emerald-600">
                                    Available
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-center">

                            <div className="rounded-xl p-4 bg-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold heading text-accent">3+</p>
                                <p className="text-xs mt-1">Full Stack Projects</p>
                            </div>

                            <div className="rounded-xl p-4 bg-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold heading ">MERN</p>
                                <p className="text-xs mt-1">Tech Stack</p>
                            </div>

                            <div className="rounded-xl p-4 bg-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold heading ">AI</p>
                                <p className="text-xs mt-1">Integration</p>
                            </div>

                            <div className="rounded-xl p-4 bg-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold heading ">2026</p>
                                <p className="text-xs mt-1">Graduate</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Welcome;
