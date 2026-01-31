import { Code, Sparkles, ShieldCheck, Rocket, Brain, Layout } from "lucide-react";

export default function FeaturesServices() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      desc: "Scalable MERN applications with clean architecture and best practices."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Modern UI/UX",
      desc: "Glassmorphism, gradients, animations and responsive layouts."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Logic",
      desc: "Smart features using AI, automation and data-driven decisions."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Systems",
      desc: "JWT auth, role-based access and secure backend APIs."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Focused",
      desc: "Optimized queries, fast load time and scalable codebase."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Solutions",
      desc: "Not copy-paste projects — unique, tailored to real-world needs."
    }
  ];

  return (
    <section
      id="features"
      className=" reveal relative py-24 px-6 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-6 heading">
            OUR FEATURES & SERVICES
          </h2>
          <p className="max-w-2xl mx-auto">
            Powerful features and professional services crafted to build
            high-quality, real-world applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-8 shadow-xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl card-bg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 shadow mb-6 group-hover:scale-110 transition" >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 heading">               
                {item.title}
              </h3>
              <p className=" text-sm leading-relaxed" >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
