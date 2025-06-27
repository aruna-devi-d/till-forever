import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function Surprise() {
  const [opened, setOpened] = useState(false);

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
          A Love Letter Just for You 💌
        </h2>

        {!opened ? (
          // ✉️ Envelope
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="cursor-pointer relative w-52 h-40 bg-rose-400 rounded-tl-xl rounded-tr-xl overflow-hidden shadow-lg mx-auto"
          >
            {/* Envelope Flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 180 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-0 left-0 w-full h-full bg-rose-500 origin-top transform"
            />

            <button
              onClick={() => setOpened(true)}
              className="romantic-button text-2xl md:text-3xl px-12 py-5 font-extrabold shadow-2xl"
            >
              Click to Open 💌
            </button>
          </motion.div>
        ) : (
          // 💖 Opened Love Letter
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl mx-auto text-center"
          >
            <p className="text-5xl md:text-6xl font-extrabold leading-tight text-rose-600 mb-6">
              My Moonlit Muse,
            </p>

            <p className="leading-relaxed max-w-2xl mx-auto text-3xl md:text-4xl font-sans font-semibold text-gray-700">
              In the silence between heartbeats, it's your name that echoes.
              You're not just part of my world —{" "}
              <span className="text-rose-500 font-bold">you are my world</span>.
              The way your smile softens storms in me, the way your presence
              feels like home — it's a kind of love poets spend lifetimes trying
              to describe.
            </p>

            <motion.div
              className="mt-10 text-6xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ❤️
            </motion.div>

            <p className="text-rose-500 text-5xl md:text-6xl font-extrabold mt-10">
              You are my always. You are my forever.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
