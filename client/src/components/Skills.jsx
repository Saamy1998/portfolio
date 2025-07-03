import { motion } from "framer-motion";

const skills = [
  { name: "React / Redux", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "SQL / MongoDB", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Git / CI-CD", level: 95 },
  { name: "C++", level: 85 },
  { name: "Python", level: 80 },
  { name: "HTML / CSS", level: 90 },
  { name: "Linux", level: 95 },
  { name: "AWS S3,ec2user", level: 65 },
];

export default function Skills() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-purple-600 h-4"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: idx * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
