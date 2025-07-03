import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
    >
      <div className="relative w-48 h-48 mb-6">
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
        />
        <div className="absolute inset-0 rounded-full bg-purple-600 blur-2xl opacity-40 z-0"></div>
      </div>

      <h1 className="text-4xl font-bold mb-2">Aravindha Saamy H</h1>
      <p className="text-xl text-purple-300 mb-6">Software Engineer | MERN Stack Developer</p>

      <div className="max-w-2xl space-y-4 text-gray-300">
        <p>
          I am a Software Engineer with 3+ years of experience developing robust, high-performance solutions. 
          I specialize in full-stack web development using React, Node.js, and MongoDB, and am passionate about building 
          scalable applications that solve real-world problems.
        </p>
        <p>
          I enjoy driving innovation through technology, optimizing performance, and working in collaborative environments. 
          I'm always eager to learn and expand my knowledge across new frameworks, tools, and best practices.
        </p>
      </div>
    </motion.section>
  );
}
