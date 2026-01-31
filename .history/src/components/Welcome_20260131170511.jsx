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
                className="relative w-full max-w-6xl rounded-2xl shadow-2xl p-20 card-bg"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="reveal-left">

                        <h1
                            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 heading">
                            Welcome to <br /> my Portfolio Website
                        </h1>
                        <p
                            className="max-w-md mb-6">
                            Building modern, reliable, and fast digital experiences with a
                            strong focus on clean UI and solid engineering.
                        </p>
                        <div className="flex items-center gap-4 mb-6 ">
                            <span className="text-xs font-semibold text-emerald-600 tracking-wide">LIVE STATUS</span>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
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
                    <div
                        className="relative rounded-xl p-6 border right-card"
                    >
                        <span
                            className="absolute top-4 right-4 text-xs font-semibold text-emerald-600"
                        >
                            ONLINE
                        </span>

                        <div className="flex items-center justify-center mb-6">
                            <div
                                className="relative w-44 h-44 rounded-full flex items-center justify-center "
                                style={{
                                    background:
                                        "linear-gradient(to bottom right, var(--accent-from), var(--accent-to))",
                                }}
                            >
                                <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center text-s tracking-widest font-bold text-slate-600">
                                    WELCOME
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-xl font-bold">06</p>
                                <p className="text-xs text-slate-600">Modules</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">12ms</p>
                                <p className="text-xs text-slate-600">Latency</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Welcome;
