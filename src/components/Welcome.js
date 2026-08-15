import React from "react";

const Welcome = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
            <div
                className="
                    relative w-full max-w-6xl
                    rounded-2xl shadow-2xl
                    p-5 sm:p-8 md:p-12 lg:p-16
                    card-bg
                    mt-5
                "
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="reveal-left text-center md:text-left">

                        <h1
                            className="
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                                lg:text-5xl
                                font-extrabold
                                leading-tight
                                mb-4
                                heading
                            "
                        >
                            Welcome to <br className="hidden sm:block" />
                            my Portfolio Website
                        </h1>

                        <p
                            className="
                                max-w-md
                                mx-auto md:mx-0
                                mb-6
                                text-sm sm:text-base
                                leading-relaxed
                            "
                        >
                            Building full-stack web applications, REST APIs,
                            authentication systems, and AI-powered solutions
                            using the MERN stack.
                        </p>

                        {/* STATUS + BUTTONS */}
                        <div
                            className="
                                flex flex-col
                                sm:flex-row
                                flex-wrap
                                items-center
                                md:items-start
                                gap-4
                                mb-6
                            "
                        >
                            {/* Availability */}
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span
                                        className="
                                            animate-ping
                                            absolute
                                            inline-flex
                                            h-full w-full
                                            rounded-full
                                            bg-emerald-400
                                            opacity-75
                                        "
                                    ></span>

                                    <span
                                        className="
                                            relative
                                            inline-flex
                                            rounded-full
                                            h-3 w-3
                                            bg-emerald-500
                                        "
                                    ></span>
                                </span>

                                <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                                    Open to Full-Time Opportunities
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full sm:w-auto">
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className="
                                        px-4 py-2
                                        rounded-full
                                        bg-slate-900
                                        text-white
                                        text-sm
                                        hover:bg-slate-800
                                        transition
                                    "
                                >
                                    PROJECTS
                                </button>

                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="
                                        px-4 py-2
                                        rounded-full
                                        border border-slate-200
                                        text-sm
                                        hover:bg-slate-100
                                        transition
                                    "
                                >
                                    CONTACT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SYSTEM CARD */}
                    <div
                        className="
                            relative
                            rounded-xl
                            p-4 sm:p-5 md:p-6
                            border
                            right-card
                            mt-4 md:mt-0
                            w-full
                        "
                    >
                        {/* Card Header */}
                        <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                            <h3
                                className="
                                    text-lg
                                    sm:text-xl
                                    font-bold
                                    heading
                                "
                            >
                                Developer Snapshot
                            </h3>

                            <div className="flex items-center gap-2 shrink-0">
                                <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                                    Available
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">

                            <div
                                className="
                                    rounded-xl
                                    p-3 sm:p-4
                                    bg-white/10
                                    backdrop-blur-sm
                                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold heading text-accent">
                                    3+
                                </p>

                                <p className="text-[11px] sm:text-xs mt-1">
                                    Full Stack Projects
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    p-3 sm:p-4
                                    bg-white/10
                                    backdrop-blur-sm
                                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold heading">
                                    MERN
                                </p>

                                <p className="text-[11px] sm:text-xs mt-1">
                                    Tech Stack
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    p-3 sm:p-4
                                    bg-white/10
                                    backdrop-blur-sm
                                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold heading">
                                    AI
                                </p>

                                <p className="text-[11px] sm:text-xs mt-1">
                                    Integration
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    p-3 sm:p-4
                                    bg-white/10
                                    backdrop-blur-sm
                                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold heading">
                                    2026
                                </p>

                                <p className="text-[11px] sm:text-xs mt-1">
                                    Graduate
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
