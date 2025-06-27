// eslint-disable-next-line
import { motion } from "framer-motion";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const Sparkle = () => {
  const x = random(0, 100);
  const y = random(0, 100);
  const scale = Math.random() * 0.7 + 0.3;
  const duration = Math.random() * 1.5 + 1;
  const delay = Math.random() * 2;

  return (
    <motion.div
      className="absolute"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, scale, 0], opacity: [0, 1, 0] }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        <path
          d="M50 0L61.226 38.774L100 50L61.226 61.226L50 100L38.774 61.226L0 50L38.774 38.774L50 0Z"
          fill="#FBBF24"
        />
      </motion.svg>
    </motion.div>
  );
};

const Sparkles = ({ count = 30 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <Sparkle key={i} />
      ))}
    </div>
  );
};

export default Sparkles;
