import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer",
    company: "Valor PayTech, Guindy",
    duration: "Nov 2021 - Present",
    summary: [
      "Delivered critical payment processing projects with 100% on-time delivery.",
      "Improved code quality by 10%, reduced technical debt.",
      "Enhanced application performance by optimizing SQL queries & Node.js APIs.",
      "Boosted frontend load speed by 30% by optimizing React components.",
      "Implemented CI/CD pipelines with GitLab, improved deployment stability."
    ]
  }
];

export default function Experience() {
  return (
    <div className="py-10 px-4 max-w-3xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-800 text-white p-6 mb-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
        >
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="italic">{exp.company} ({exp.duration})</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {exp.summary.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
