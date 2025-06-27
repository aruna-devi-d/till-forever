// Example Updated Landing.jsx
// Apply this pattern to all your components step-by-step as shown
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Landing({ nextStep }) {
  return (
    <div className="romantic-card text-center page-container">
      {/* Heading */}
      <motion.h1
        className="page-heading text-7xl md:text-9xl text-rose-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        For My Dearest Love ❤️
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="page-paragraph text-4xl md:text-5xl text-gray-700 leading-relaxed font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A special journey through our love story...
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
      >
        <button
          onClick={nextStep}
          className="romantic-button text-2xl md:text-3xl px-12 py-6 font-bold shadow-xl"
        >
          Begin Our Journey ✨
        </button>
      </motion.div>
    </div>
  );
}
