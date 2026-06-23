import { Code, Server, ShieldCheck, Rocket, Brain, Database } from "lucide-react";

export default function FeaturesServices() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      desc: "Building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
desc: "Designing RESTful APIs, authentication systems, and scalable server-side architecture."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
desc: "Integrating AI-powered features such as resume analysis, career recommendations, and interview preparation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Authentication & Security",
desc: "Implementing JWT authentication, authorization, protected routes, and secure user workflows."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
desc: "Designing and managing MongoDB databases, schemas, and efficient data models."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Problem Solving",
desc: "Developing practical software solutions that address real-world user needs."
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
            CORE EXPERTISE
          </h2>
          <p className="max-w-2xl mx-auto">
            Areas where I have hands-on experience building full-stack applications and solving real-world problems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="reveal group relative rounded-2xl p-8 shadow-xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl card-bg">
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
