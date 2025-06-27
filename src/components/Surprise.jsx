// eslint-disable-next-line
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function Surprise() {
  return (
    <motion.div
      className="romantic-card text-center relative overflow-hidden space-y-16 max-w-3xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Sparkles />

      <div className="relative z-10 space-y-14 page-container">
        <h2 className="text-6xl md:text-8xl text-rose-600 font-extrabold drop-shadow-lg">
          A Special Message For You 💝
        </h2>

        <div className="space-y-14 text-gray-700">
          <p className="text-5xl md:text-6xl font-extrabold leading-tight">
            My dearest love,
          </p>

          <p className="leading-relaxed max-w-2xl mx-auto text-3xl md:text-4xl font-sans font-semibold">
            Every day with you is a beautiful surprise. Your love makes my world
            brighter, my smiles wider, and my heart fuller. You're the most
            precious gift I could ever ask for, and I'm so grateful for every
            single moment with you.
          </p>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl md:text-9xl"
          >
            ❤️
          </motion.div>

          <p className="text-rose-500 text-5xl md:text-6xl font-extrabold">
            Forever and Always Yours
          </p>
        </div>
      </div>
    </motion.div>
  );
}
