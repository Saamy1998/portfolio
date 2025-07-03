import { motion } from "framer-motion";
import { Download } from "lucide-react"; // optional icon if you installed lucide-react

export default function ResumeDownload() {
  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg transition transform hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </motion.div>
  );
}
