import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const compliments = [
  "Your smile lights up my entire world ✨",
  "Every moment with you feels like a beautiful dream 💫",
  "You make my heart skip a beat every time I see you 💓",
  "Your love makes every day feel like a fairytale 🏰",
  "You're the missing piece to my puzzle of happiness 🧩",
  "Your kindness makes me fall in love with you more each day 💝",
  "Being with you is my favorite place to be 🌟",
  "You're the sweetest chapter in my life's story 📖",
  "Your love is the most precious gift I've ever received 🎁",
  "You make ordinary moments extraordinary just by being you ✨",
];

export default function ComplimentGenerator() {
  const [currentCompliment, setCurrentCompliment] = useState(
    "Just a little something for you..."
  );

  const getNewCompliment = () => {
    const newCompliment =
      compliments[Math.floor(Math.random() * compliments.length)];
    setCurrentCompliment(newCompliment);
  };

  return (
    <div className="romantic-card text-center space-y-16 page-container">
      <h2 className="text-6xl md:text-8xl text-rose-600 font-extrabold drop-shadow-lg">
        Sweet Notings 💌
      </h2>

      <motion.div
        className="min-h-[100px] flex items-center justify-center px-4"
        key={currentCompliment}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl md:text-6xl text-gray-700 italic font-bold leading-relaxed max-w-4xl mx-auto">
          "{currentCompliment}"
        </p>
      </motion.div>

      <div>
        <button
          onClick={getNewCompliment}
          className="romantic-button text-2xl md:text-3xl px-12 py-5 font-extrabold shadow-2xl"
        >
          Get another one 💕
        </button>
      </div>
    </div>
  );
}
