import { motion } from "framer-motion";

const projects = [
  {
    category: "Work",
    title: "Valor Switch UI",
    tech: "React, Node, SQL, JWT",
    desc: "Internal data visualization platform for transactional analysis, improving retrieval by 45% and secured with JWT.",
    github: "#",
    demo: "#"
  },
  {
    category: "Work",
    title: "Fleet Card TSYS Integration",
    tech: "C++, ISO 8583, Multi-threading",
    desc: "Engine processing 10K+ daily transactions with secure encryption, boosted performance by 50%.",
    github: "#",
    demo: "#"
  },
  {
    category: "Personal",
    title: "Centralized Log Monitoring",
    tech: "Elasticsearch, Grafana, Logstash",
    desc: "Full-stack observability pipeline reducing log troubleshooting time by 65%.",
    github: "#",
    demo: "#"
  },
  {
    category: "Personal",
    title: "ISO 8583 POS Simulator",
    tech: "C++, SQL",
    desc: "Simulated transaction engine increasing QA coverage by 70%.",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 text-white p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="italic mb-2">{proj.tech}</p>
            <p>{proj.desc}</p>
            <div className="mt-4 flex gap-4">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="underline">Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
