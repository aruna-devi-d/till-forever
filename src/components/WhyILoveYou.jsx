// eslint-disable-next-line
import { motion } from "framer-motion";

const reasons = [
  "For **that smile** that makes my whole day better 🥺✨",
  "For laughing at my WORST jokes 😂",
  "For being hot 😎 even when you don’t try",
  "For dealing with my mood swings like a CHAMP 😇",
  "For always making me smile, even when I pretend to be mad 😏",
  "For your killer hugs that fix everything 🥰",
  "For that voice that makes my heart melt 🔥",
  "For existing… that’s enough reason for me ❤️",
];

export default function WhyILoveYou() {
  return (
    <motion.div
      className="romantic-card text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-6xl md:text-8xl text-rose-600 mb-14 font-extrabold drop-shadow-lg">
        Why I Love You 😏
      </h2>

      <div className="space-y-12 text-left max-w-3xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="text-3xl md:text-4xl text-gray-700 font-bold leading-relaxed"
          >
            {i + 1}. {reason}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
